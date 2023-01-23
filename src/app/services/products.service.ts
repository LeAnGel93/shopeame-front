import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
db_url = 'http://localhost:3000/products'
  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get(this.db_url)
  }

  // getProduct(id: number){
  //   return this.http.get(`${this.db_url}/${id}`)
  // }

  postProducts(product: any){
    return this.http.post(this.db_url, product)
  }

  putProduct(product:any, id: number){
    return this.http.put(`${this.db_url}/${id}`, product)
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.db_url}/${id}`)
  }


}
