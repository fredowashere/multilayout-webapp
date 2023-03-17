import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from "rxjs";
import { GetAttoreResponse } from '../api/stato-avanzamento/models';
import { UtentiService } from '../api/stato-avanzamento/services';
import { User, UTENTE_BASE } from '../models/user';
import { parseJwt } from '../utils/json';

const ANONYMOUS_USER: User = {
  idUtente: undefined,
  idAzienda: undefined,
  nome: undefined,
  cognome: undefined,
  roles: []
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user$ = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this._user$.asObservable();

  constructor(
    private utentiService: UtentiService
  ) {
    this.autoLogin();
  }

  login(token: string, idAzienda: number) {

    localStorage.setItem('token', token);
    localStorage.setItem('id_azienda', JSON.stringify(idAzienda));
    localStorage.setItem("expires_at", JSON.stringify(parseJwt(token).exp));

    return this.utentiService.getAttore({ idAzienda })
      .pipe(
        tap((u: GetAttoreResponse) => {

          const user = {
            idUtente: u.utente?.idUtente,
            idAzienda: u.idAzienda,
            nome: u.utente?.nome,
            cognome: u.utente?.cognome,
            roles: [
              UTENTE_BASE,
              ...(u.profili as Array<any>)
                .map(p => p.descrizione)
            ]
          } as User;

          localStorage.setItem('user_data', JSON.stringify(user));

          this._user$.next(user);
        })
      );
  }

  fakeLogin(idUtente: number, idAzienda: number, roles: string[]) {

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRG9ua2V5IEtvbmcifQ.QeBhkODg6wc3TYXhmn7swjqUh2USVxI86bdRl57eAUA');
    localStorage.setItem('id_azienda', JSON.stringify(idAzienda));
    localStorage.setItem("expires_at", JSON.stringify(10000000000000));

    const user = {
      idUtente,
      idAzienda,
      nome: 'Mario',
      cognome: 'Super',
      roles: [
        UTENTE_BASE,
        ...roles
      ]
    } as User;

    localStorage.setItem('user_data', JSON.stringify(user));

    this._user$.next(user);
  }

  autoLogin() {

    const token = localStorage.getItem('token');
    const idAzienda = localStorage.getItem('id_azienda');
    const userData = localStorage.getItem('user_data');
    
    if (token && idAzienda && userData) // && this.isLoggedIn())
      this._user$.next(JSON.parse(userData));
    
    return this.user$;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("id_azienda");
    localStorage.removeItem("user_data");
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
