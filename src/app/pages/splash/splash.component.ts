import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-splash',
  template: '<!-- this is an empty page that serves as a landing page to login the user via query params -->'
})
export class SplashComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toaster: ToastService
  ) {}

  async ngOnInit() {

    const qp = this.route.snapshot.queryParams;

    if (qp.token && qp.idAziendaSelezionata) {
      const bareToken = qp.token.replace('Bearer ', '');
      this.authService
        .login(bareToken, qp.idAziendaSelezionata)
        .subscribe(
          () => this.router.navigate(['/']),
          () => this.toaster.show("Non è stato possibile recuperare le informazioni dell'utente collegato", { classname: 'bg-warning' })
        );
    }
  }
}
