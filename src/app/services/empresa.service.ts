import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  constructor(private http: HttpClient) {}

  Get(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}empresas`);
  }

  GetId(idEmpresa: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}empresas/${idEmpresa}`);
  }

  Login(credentials: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}empresas/login`, credentials);
  }

  New(empresa: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}empresas`, empresa);
  }

  Actualizar(empresa: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}empresas`, empresa);
  }

  eliminar(): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}empresas`);
  }
}
