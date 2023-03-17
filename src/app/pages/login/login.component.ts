import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  idUtenteCtrl!: FormControl;
  idAzienda2Ctrl!: FormControl;
  rolesCtrl!: FormControl;

  rolesFormatter = (role: any) => role.name?.split('-').pop().trim();
  rolesFilter = (term: string, role: any) => role.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
  roles = ROLES.map(role => ({ text: role, name: role }));

  fakeLoginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.tokenCtrl = new FormControl("eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjoiZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UjBOTkluMC4uLXItSDJ1UkxSZnhNckdMVi40Y0hpVS1IV19lTVB0ZXlKS0JHYkFFNzRDczRzTy1Ub0tOODdUaHpyd24wcDRMSi04RGJGZ0ZBVUlJXzJxaGhrUG5TQ2NoUDRkUDdlQi13TjBxT3BWdVNTQTBJLW8yNFNLbHNYNmpFUTlST2p2LW83SXM1VVJZWGdVU0xrSUVRcV90Vl9oUjZkWjByN0Q1Z3VVcHIzTkJibFJlRWlNTFUuSHdaU2lXMjhCS3Etc0FDb29nOGxsQSIsImV4cCI6MTY3OTE0OTkyMiwiaWF0IjoxNjc5MDYzNTIyfQ.9ZDrsYclyahxJZiA_m1aolCkt5VXE9DFCTAca8DqO1QKpJzbRU-oR5o2NXNXH455PlzxvJSCWdvzp6LoAT1sTA");
    this.idAziendaCtrl = new FormControl(15);

    this.loginForm = new FormGroup({
      token: this.tokenCtrl,
      idAzienda: this.idAziendaCtrl
    });

    this.idUtenteCtrl = new FormControl(5022);
    this.idAzienda2Ctrl = new FormControl(15);
    this.rolesCtrl = new FormControl();

    this.fakeLoginForm = new FormGroup({
      idUtente: this.idUtenteCtrl,
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

    if (!val.idUtente || !val.idAzienda)
      return;

    this.authService.fakeLogin(
      +val.idUtente,
      +val.idAzienda,
      val.roles ? val.roles.map((role: any) => role.name) : []
    );
    this.router.navigateByUrl('/');
  }

}
