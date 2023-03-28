import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from 'src/environments/environment';
import { ENV_COLL, ENV_DEV, ENV_PROD } from 'src/environments/envs';
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
  private set user(u: User) {
    this._user$.next(u);
  }
  get user() {
    return this._user$.getValue();
  }

  constructor(
    private utentiService: UtentiService,
    private router: Router
  ) { }

  login(token: string, idAzienda: number) {

    localStorage.setItem('token', token);
    localStorage.setItem('id_azienda', JSON.stringify(idAzienda));
    localStorage.setItem("expires_at", JSON.stringify(parseJwt(token).exp));

    if (!this.isLoggedIn())
      this.logout();

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

          this.user = user;
        })
      );
  }

  autoLogin() {

    const token = localStorage.getItem('token');
    const idAzienda = localStorage.getItem('id_azienda');
    const userData = localStorage.getItem('user_data');
    
    if (token && idAzienda && userData)
      this.user = JSON.parse(userData);
    
    return this.user$;
  }

  fakeLogin(
    utente: { idUtente: number, nome: string, cognome: string},
    idAzienda: number,
    roles: string[]
  ) {

    localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjoiZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UjBOTkluMC4uSWNkVWg5TGhrUzUyY3pIUS5jenpGUEpXeTFrVW1xRWpITTRjdzNDekY4Ql8yODF2THpsbTcwblhJYjJjMnE0X05sVEZXOTUzMS1PXzFGUHRpTGdGVkl1aG1EdU43NjJHbnZONkdhaWhveWtIdHpTd0ZkSjdPeDVrMDBvcE5CcDRaUE94OXA5bXV0eWhWRGE2dW85VW53SkRIZDg2S2RXYTlOcVhYU3dLMXNSNzJRODJLS0EuVERNME82dlY0V1E1M0ZES0NPbW9WUSIsImV4cCI6MTY4MDA3NzEwMywiaWF0IjoxNjc5OTkwNzAzfQ.q7dWuFkgGCvPnrPRk_94RVeB4pc7Az3VUJ-h9240CLcqfBklN-oZGPuRTiTT1pEeOIytMeuC1wU0ygRBRitSjg');
    localStorage.setItem('id_azienda', JSON.stringify(idAzienda));
    localStorage.setItem("expires_at", JSON.stringify(10000000000000));

    const user = {
      idUtente: utente.idUtente,
      nome: utente.nome,
      cognome: utente.cognome,
      idAzienda,
      roles: [
        UTENTE_BASE,
        ...roles
      ]
    } as User;

    localStorage.setItem('user_data', JSON.stringify(user));

    this.user = user;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("id_azienda");
    localStorage.removeItem("user_data");
    localStorage.removeItem("expires_at");
    this.user = ANONYMOUS_USER;

    if (environment.name === ENV_DEV)
      this.router.navigateByUrl('/login');

    if ([ENV_COLL, ENV_PROD].includes(environment.name))
      window.location.href = environment.loginUrl;
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
      expiresAt = JSON.parse(expiration) * 1000;

    return expiresAt;
  }
}
