import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ROLES } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tokenCtrl!: FormControl;
  idAziendaCtrl!: FormControl;

  loginForm!: FormGroup;

  utenteCtrl!: FormControl;
  idAzienda2Ctrl!: FormControl;
  rolesCtrl!: FormControl;

  aziende: { text: string, value: string }[] = [];
  idAziendaUtenti: { [key: string]: { idUtente: number, nome: string, cognome: string }[] } = {};
  utenti: { idUtente: number, nome: string, cognome: string }[] = [];
  utentiFormatter = (user: any) => user.cognome + ' ' + user.nome;
  utentiFilter = (term: string, utente: any) =>
    (utente.cognome + ' ' + utente.nome).toLowerCase().includes(term.toLowerCase());

  rolesFormatter = (role: any) => role.name?.split('-').pop().trim();
  rolesFilter = (term: string, role: any) => role.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
  roles = ROLES.map(role => ({ text: role, name: role }));

  fakeLoginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.tokenCtrl = new FormControl("eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjoiZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UjBOTkluMC4uSWNkVWg5TGhrUzUyY3pIUS5jenpGUEpXeTFrVW1xRWpITTRjdzNDekY4Ql8yODF2THpsbTcwblhJYjJjMnE0X05sVEZXOTUzMS1PXzFGUHRpTGdGVkl1aG1EdU43NjJHbnZONkdhaWhveWtIdHpTd0ZkSjdPeDVrMDBvcE5CcDRaUE94OXA5bXV0eWhWRGE2dW85VW53SkRIZDg2S2RXYTlOcVhYU3dLMXNSNzJRODJLS0EuVERNME82dlY0V1E1M0ZES0NPbW9WUSIsImV4cCI6MTY4MDA3NzEwMywiaWF0IjoxNjc5OTkwNzAzfQ.q7dWuFkgGCvPnrPRk_94RVeB4pc7Az3VUJ-h9240CLcqfBklN-oZGPuRTiTT1pEeOIytMeuC1wU0ygRBRitSjg");
    this.idAziendaCtrl = new FormControl(15);

    this.loginForm = new FormGroup({
      token: this.tokenCtrl,
      idAzienda: this.idAziendaCtrl
    });

    this.utenteCtrl = new FormControl();
    this.idAzienda2Ctrl = new FormControl();
    this.rolesCtrl = new FormControl();

    this.idAzienda2Ctrl.valueChanges
      .pipe(
        tap((idAzienda: string) => {
          this.utenteCtrl.setValue(null);
          if (this.idAziendaUtenti[idAzienda])
            this.utenti = this.idAziendaUtenti[idAzienda];
        })
      )
      .subscribe();

    this.http.get('assets/json/users.json')
      .subscribe((res: any) => {
        this.idAziendaUtenti = res;
        this.aziende = Object.keys(res).map(value => ({ text: value, value }))
        this.idAzienda2Ctrl.setValue(15);
      });

    this.fakeLoginForm = new FormGroup({
      utente: this.utenteCtrl,
      idAzienda: this.idAzienda2Ctrl,
      roles: this.rolesCtrl
    });
  }

  login() {

    const val = this.loginForm.value;

    if (!val.token || !val.idAzienda)
      return;

    this.authService.login(val.token, +val.idAzienda)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

  fakeLogin() {

    const val = this.fakeLoginForm.value;

    if (!val.utente || !val.idAzienda)
      return;

    this.authService.fakeLogin(
      val.utente,
      +val.idAzienda,
      val.roles ? val.roles.map((role: any) => role.name) : []
    );
    this.router.navigateByUrl('/');
  }

}
