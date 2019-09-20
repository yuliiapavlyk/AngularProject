import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as env from 'src/environments/environment';
import { Observable } from 'rxjs';
import {IUser, IRegisterInfo} from "src/interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  API_URL = env.environment.LOGIN_URL;;

  constructor(private http:HttpClient) {
  }

  logIn(user):Observable<{accessToken:string}>{
    return this.http.post<{accessToken:string}>(`${this.API_URL}/signin`, user)
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  logOut(){
  return localStorage.clear();
  }

  registerUser(user: IRegisterInfo): Observable<IUser>{
    return this.http.post<IUser>(`${this.API_URL}/signup`, user);
  }

  updateUser(user:IUser):Observable<IUser>{
    //TODO change end-point after adding this functionality on back-end side.
    return this.http.put<IUser>(`${this.API_URL}/update`, user);
  }

  getCurrentUserInfo():Observable<IUser>{
    //TODO change end-point after adding this functionality on back-end side.
    return this.http.get<IUser>(`${this.API_URL}/aboutMe`);
  }
}
