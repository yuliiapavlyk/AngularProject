import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/interfaces/user.model';
import * as env from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_USER = env.environment.USER_URL;

  constructor(private http:HttpClient) {

   }

  public getUsers(){
    return this.http.get(`${this.API_USER}/users`);
}

 public createUser(user: IUser){
    return this.http.post(`${this.API_USER}/users`, user);
}
public  updateUser(id: number, user: IUser) {
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.put(`${this.API_USER}/users`, user, { params: urlParams});
}
 public deleteUser(id: number){
    return this.http.delete(`${this.API_USER}/users` + '/' + id);
}
}
