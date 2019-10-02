import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetForm} from 'src/interfaces/getmyform.model';
import * as env from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  private API_URL=env.environment.FORMS_URL;
  public  getForm():Observable<IGetForm[]>{
    return this.http.get<IGetForm[]>(`${this.API_URL}/forms`);
  }

  getFormById(payload: number):Observable<IGetForm> {
    return this.http.get<IGetForm>(`${this.API_URL}/forms/${payload}`);
  }

  createForm(payload: IGetForm): Observable<IGetForm> {
    return this.http.post<IGetForm>(`${this.API_URL}/forms`, payload);
  }

  updateForm(form: IGetForm): Observable<IGetForm> {
    return this.http.put<IGetForm>(
      `${this.API_URL}/forms/${form.id}`,form
    );
  }

  deleteForm(payload: number) {
    return this.http.delete(`${this.API_URL}/forms/${payload}`);
  }
}
