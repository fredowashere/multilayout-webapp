import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: FormControl;
  username!: FormControl;
  password!: FormControl;

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.email = new FormControl();
    this.username = new FormControl("admin");
    this.password = new FormControl("admin");

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  login() {

    const val = this.loginForm.value;

    if (!val.username || !val.password)
      return;

    this.authService.login(val.username, val.password)
      .subscribe(() => {
        this.router.navigateByUrl('/dashboard');
      });
  }

}
