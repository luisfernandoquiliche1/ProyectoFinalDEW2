import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  constructor(
    private readonly http: HttpClient
  ) { }

  __GetCategorias(){
    return this.http.get("http://localhost:8085/backend-upc/categories",{responseType:"json"})
  }

}
