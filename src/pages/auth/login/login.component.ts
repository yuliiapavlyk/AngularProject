import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/interfaces/login.model';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logins: ILogin [] = [];
  currentLogin: ILogin;
  editedLogin: ILogin;
  isNewRecord: boolean;
  statusMessage: string;
  constructor(private loginService:LoginService) { }


  private GetLogin() {
    this.loginService.getLogin().subscribe((data: ILogin[]) => {
            this.logins = data;
        });
}



editLogin(login: ILogin) {
    this.editedLogin = login;
}

saveLogin() {
  if (this.isNewRecord) {
      this.loginService.createLogin(this.editedLogin).subscribe(data => {
          this.statusMessage = 'Data were added',
          this.GetLogin();
      });
      this.isNewRecord = false;
      this.editedLogin = null;
  } else {
      this.loginService.updateLogin(this.editedLogin.email).subscribe(data => {
          this.statusMessage = 'Date was update',
          this.GetLogin();
      });
      this.editLogin = null;
  }
}


deleteLogin(login: ILogin) {
    this.loginService.deleteLogin(login.email).subscribe(data => {
        this.statusMessage = 'Login was deleted',
        this.GetLogin();
    });
}
  ngOnInit() {
  }

}
