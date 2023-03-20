import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UTENTE_BASE } from './models/user';
import { AuthService } from './services/auth.service';
import { ToastsContainer } from './shared/components/toasts-container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastsContainer
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: 'loggedInOnlyGuard',
      useFactory: (authService: AuthService, router: Router) =>
        new AuthGuard([ UTENTE_BASE ], authService, router),
      deps: [ AuthService, Router ]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
