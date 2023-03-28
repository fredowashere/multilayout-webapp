import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AMMINISTRATORE, ROLES } from './models/user';
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
      provide: 'attivitaUserGuard',
      useFactory: (authService: AuthService, router: Router) =>
        new AuthGuard([ ...ROLES ], authService, router),
      deps: [ AuthService, Router ]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
