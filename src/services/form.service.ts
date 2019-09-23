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

  private API_URL=env.environment.FORMS_URL;
  public  getForm():Observable<IForm[]>{
    return this.http.get<IForm[]>(`${this.API_URL}/forms`);
  }

  getFormById(payload: number):Observable<IForm> {
    return this.http.get<IForm>(`${this.API_URL}/forms/${payload}`);
  }

  createForm(payload: IForm): Observable<IForm> {
    return this.http.post<IForm>(`${this.API_URL}/forms`, payload);
  }

  updateForm(form: IForm): Observable<IForm> {
    return this.http.put<IForm>(
      `${this.API_URL}/forms/${form.id}`,form
    );
  }

  deleteForm(payload: number) {
    return this.http.delete(`${this.API_URL}/forms/${payload}`);
  }
}
