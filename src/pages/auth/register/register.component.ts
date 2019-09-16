import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  loginForm: FormGroup;
  confirmPassword:boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],      
      secondName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  onSubmit(){
    if(this.loginForm.value.password == this.loginForm.value.confirm){      
      console.log(this.loginForm);      
   //send data  via service
    }
    else {
      this.confirmPassword = true;
    }
  }

}
