import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['']},
      {validator: this.checkPasswords });

  }

  onSubmit(){
      console.log(this.registerForm);
   //send data  via service

  }

   checkPasswords(registerForm: FormGroup): any {
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('confirm').value;
    return password === confirmPassword ? null : { notSame: true }
  }

}
