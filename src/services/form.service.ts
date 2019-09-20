import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IForm } from 'src/interfaces/myform.model';
import * as env from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  private APi_URL=env.environment.FORMS_URL;
  public  getForm(param):Observable<IForm[]>{
    return this.http.get<IForm[]>(`${this.APi_URL}/forms`,{params: param});
  }
}
