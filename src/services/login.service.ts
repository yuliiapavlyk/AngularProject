import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin} from 'src/interfaces/login.model';
import * as env from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_LOGIN = env.environment.USER_URL;
  constructor(private http:HttpClient) { }

  public getLogin(){
    return this.http.get(`${this.API_LOGIN}/auth`);
}

 public createLogin(login: ILogin){
    return this.http.post(`${this.API_LOGIN}/auth`, login);
}
public  updateLogin(login:string) {
    const urlParams = new HttpParams().set("login", login);
    return this.http.put(`${this.API_LOGIN}/auth`, login, { params: urlParams});
}
 public deleteLogin(login: string){
    return this.http.delete(`${this.API_LOGIN}/auth` + '/' + login);
}

}
