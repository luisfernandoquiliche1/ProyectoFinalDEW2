import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  private readonly baseUrl = 'http://localhost:8085/backend-upc/images';
  __GetImagesbyProduct(productID: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}?productID=${productID}`,{responseType:"json"})
  }
}
