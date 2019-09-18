import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['']});
  }

}
