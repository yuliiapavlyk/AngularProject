import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService] // TODO: Why we inject service here?
})
export class LoginComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }
  type = 'password';
  show = false;
  error: string;
  myGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  ngOnInit() {

  }

  onSubmit() {
    const { value } = this.myGroup;
    this.userServ.logIn({email: value.email,
      password: value.password}).subscribe(
        res => {
          localStorage.setItem('accessToken', res.accessToken);
          this.router.navigate(['/my-forms']);
        },
        err => {
          this.error = err.message;
        }
        );
      }
      ShowPassword() {
        this.show = !this.show;
      }
    }
