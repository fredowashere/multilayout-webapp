import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap, timer } from "rxjs";
import { User } from '../models/user';
import { parseJwt } from '../utils/json';

interface AuthResult {
  expiresAt: number;
  idToken: string;
}

const DUMMY_AUTH_RES: AuthResult = {
  expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000, // expires tomorrow
  idToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJpZCI6MSwidXNlcm5hbWUiOiJKb2huIERvZSIsInJvbGVzIjpbIkFETUlOIl19LCJpYXQiOjE1MTYyMzkwMjJ9.bMPK5XGVG55i3ME8EiHfF_mGweuKqtf6PDH3XhqPOwk"
}

const ANONYMOUS_USER: User = {
  id: undefined,
  username: undefined,
  roles: []
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user$ = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this._user$.asObservable();

  constructor() {
    this.autoLogin();
  }

  login(username: string, password: string) {

    return timer(200)
      .pipe(
        tap(() => {

          // Simulate backend error
          if (username !== 'admin' && password !== 'admin')
            throw Error('Username or password do not match');
        }),
        map(() => DUMMY_AUTH_RES),
        tap((authRes) => this.setSession(authRes)),
        tap(({ idToken }) => this.emitUser(idToken))
      );
  }

  autoLogin() {

    const idToken = localStorage.getItem('id_token');

    if (idToken && this.isLoggedIn())
      this.emitUser(idToken);
    
    return this.user$;
  }
        
  private setSession(authRes: AuthResult) {
    localStorage.setItem('id_token', authRes.idToken);
    localStorage.setItem("expires_at", JSON.stringify(authRes.expiresAt));
  }
  
  private emitUser(idToken: string) {
    const user = parseJwt(idToken).user;
    this._user$.next(user);
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this._user$.next(ANONYMOUS_USER);
  }

  isLoggedIn() {
    return new Date().getTime() < this.getExpiration();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {

    const expiration = localStorage.getItem("expires_at");

    let expiresAt = 0;
    if (expiration)
      expiresAt = JSON.parse(expiration);

    return expiresAt;
  }
}
