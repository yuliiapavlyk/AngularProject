import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IRegisterInfo } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router:Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['']},
      {validator: this.checkPasswords });
  }

  onSubmit(){
   const userInfo:IRegisterInfo = {
     firstName: this.registerForm.get('firstName').value,
     lastName: this.registerForm.get('lastName').value,
     email: this.registerForm.get('email').value,
     password: this.registerForm.get('password').value,
   }
   this.userService.registerUser(userInfo).subscribe(
    res=>{
      this.toastr.success('Welcome to creator forms!');
      this.router.navigate(['/login']);
    },
    err=>{
      this.toastr.error('Try register one more time');
    });
  }

   checkPasswords(registerForm: FormGroup): any {
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('confirm').value;
    return password === confirmPassword ? null : { notSame: true }
  }

}
