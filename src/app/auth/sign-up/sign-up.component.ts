import { ValidatorService } from './../../services/validator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: any;
  constructor(private fb: FormBuilder, private customValidator: ValidatorService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
      
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    console.log(this.signUpForm)
    console.log(JSON.stringify(this.signUpForm.value, null, 2))
    if (this.signUpForm.errors) {
      console.log(JSON.stringify(this.signUpForm.errors, null, 2))
    }
    if (this.signUpForm.invalid) {
      return;
    }

  }

}
