import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constant/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {

  constructor(private http:HttpClient) { }
 
 getProducts ():Observable <any>{
  return this.http.get(`${baseUrl.BaseUrl}/products`);
 }

 getspecificProduct (id:string):Observable <any>{
  return this.http.get(`${baseUrl.BaseUrl}/products/${id}`);
 }
 
 
}
