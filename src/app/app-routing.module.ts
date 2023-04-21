import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: ["loggedInOnlyGuard"]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module')
        .then(m => m.LoginModule)
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./pages/splash/splash.module')
        .then(m => m.SplashModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
