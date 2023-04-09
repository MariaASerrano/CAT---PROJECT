import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}preguntas`)
  }

  GetId(idPregunta:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}preguntas/${idPregunta}`)
  }

  New(pregunta:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}preguntas`,pregunta)
  }

  Actualizar(pregunta:any):Observable<any>{
    return this.http.patch<any>(`${environment.apiUrl}preguntas`,pregunta)
  }

  eliminar():Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}preguntas`)
  }
}
