import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}respuestas`)
  }

  GetId(idRespuesta:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}respuestas/${idRespuesta}`)
  }

  New(respuesta:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}respuestas`,respuesta)
  }

  Actualizar(respuesta:any):Observable<any>{
    return this.http.patch<any>(`${environment.apiUrl}respuestas`,respuesta)
  }

  eliminar():Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}respuestas`)
  }
}
