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

  rolesFormatter = (role: any) => role.name?.split('-').pop().trim();
  roles = ROLES.map(role => ({ text: role, name: role }));

  fakeLoginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.tokenCtrl = new FormControl("eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjoiZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UjBOTkluMC4uLXItSDJ1UkxSZnhNckdMVi40Y0hpVS1IV19lTVB0ZXlKS0JHYkFFNzRDczRzTy1Ub0tOODdUaHpyd24wcDRMSi04RGJGZ0ZBVUlJXzJxaGhrUG5TQ2NoUDRkUDdlQi13TjBxT3BWdVNTQTBJLW8yNFNLbHNYNmpFUTlST2p2LW83SXM1VVJZWGdVU0xrSUVRcV90Vl9oUjZkWjByN0Q1Z3VVcHIzTkJibFJlRWlNTFUuSHdaU2lXMjhCS3Etc0FDb29nOGxsQSIsImV4cCI6MTY3OTE0OTkyMiwiaWF0IjoxNjc5MDYzNTIyfQ.9ZDrsYclyahxJZiA_m1aolCkt5VXE9DFCTAca8DqO1QKpJzbRU-oR5o2NXNXH455PlzxvJSCWdvzp6LoAT1sTA");
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
