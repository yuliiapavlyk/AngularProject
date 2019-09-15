import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as env from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  API_URL = env.environment.LOGIN_URL;;

  constructor(private http:HttpClient) {
  }
logIn(user){
  return this.http.post(`${this.API_URL}/signin`, user)
}
getToken(){
  return localStorage.getItem('accessToken');
}
}
