import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarcategoriaService {

  private readonly baseUrl = 'http://localhost:8085/backend-upc/product-by-category';

  constructor(private readonly http: HttpClient) {}

  getProductosPorCategoria(categoria: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?category=${categoria}`, { responseType: 'json' });
  }
}