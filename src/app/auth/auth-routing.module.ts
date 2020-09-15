import { ForgotCredComponent } from './forgot-cred/forgot-cred.component';
import { AuthGaurdService } from './../services/auth-gaurd.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
    { path: '', redirectTo: '/auth/signin', pathMatch:'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'password-reset', component: ForgotCredComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[AuthGaurdService]
})
export class AuthRoutingModule { }