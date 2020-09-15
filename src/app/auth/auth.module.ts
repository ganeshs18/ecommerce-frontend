import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotCredComponent } from './forgot-cred/forgot-cred.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgotCredComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[AuthRoutingModule]
})
export class AuthModule { }
