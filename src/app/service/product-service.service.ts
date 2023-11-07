import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseURL: string = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}`)
  }

  newProducto(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}`, body)
  }

  getProductoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`)
  }

  updateProducto(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/${id}`, body)
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`)
  }

}
