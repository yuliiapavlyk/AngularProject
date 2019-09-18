import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as env from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  API_URL = env.environment.LOGIN_URL;;

  constructor(private http:HttpClient) {
  }
logIn(user):Observable<any>{
  return this.http.post<{accessToken:string}>(`${this.API_URL}/signin`, user)
}
getToken(){
  return localStorage.getItem('accessToken');
}
logOut(){
return localStorage.clear();
}
}
