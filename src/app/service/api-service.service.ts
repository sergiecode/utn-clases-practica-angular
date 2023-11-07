import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario, IUsuarioResponse } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseURL: string = 'https://7csx60ms-3050.brs.devtunnels.ms'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.baseURL}/listar-usuarios`)
  }

  newUsuario(body: any): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.baseURL}/nuevo-usuario`, body)
  }

  getUsuarioById(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.baseURL}/obtener-usuario/${id}`)
  }

  updateUsuario(id: number, body: any): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.baseURL}/actualizar-usuario/${id}`, body)
  }

  deleteUsuario(id: number): Observable<IUsuarioResponse> {
    return this.http.delete<IUsuarioResponse>(`${this.baseURL}/borrar-usuario/${id}`)
  }

}
