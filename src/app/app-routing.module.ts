import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectModule} from "./project/project.module";
import {MainPageComponent} from "./home/main-page/main-page.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {RegistrationComponent} from "./auth/components/registration/registration.component";
import {AngularFireAuthGuard, hasCustomClaim} from "@angular/fire/compat/auth-guard";
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToMain = () => redirectLoggedInTo(['main']);
const belongsToAccount = (next: { params: { id: any; }; }) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'login',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMain },
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMain },
    component: RegistrationComponent
  },
  {
    path: 'projects',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => ProjectModule
  },
  {
    path: '**', redirectTo: 'main', pathMatch: 'full',
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
