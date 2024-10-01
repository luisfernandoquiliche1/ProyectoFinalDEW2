import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __GetProducts(){
    return this.http.get("http://localhost:8085/backend-upc/products",{responseType:"json"})
  }

  __GetProduct(param : string){
    return this.http.get("http://localhost:8085/backend-upc/product?id="+ param,{responseType:"json"})
  }
  __GetProductsByCategory(category: string) {
    return this.http.get(`http://localhost:8085/backend-upc/products-by-category?category=${category}`, { responseType: "json" });
}


}
