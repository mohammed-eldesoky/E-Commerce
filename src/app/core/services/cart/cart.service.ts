import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from './../../constant/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartNumber:BehaviorSubject<any>=new BehaviorSubject<any>(0);
  constructor(private http:HttpClient) { 
this.getLogedcartt().subscribe({
  next:(res)=>{
this.cartNumber.next(res.numOfCartItems)
  }
})

  }
addTocart(productId:string):Observable<any>{
 return this.http.post(`${baseUrl.BaseUrl}/cart`,{productId:productId},{headers:{token:localStorage.getItem('userToken')||''}})
}

getLogedcartt():Observable<any>{
  return this.http.get(`${baseUrl.BaseUrl}/cart`,{headers:{token:localStorage.getItem('userToken')||''}})
 }

 updateCart(productId:string,count:number):Observable<any>{
  return this.http.put(`${baseUrl.BaseUrl}/cart/${productId}`,{count:count},{headers:{token:localStorage.getItem('userToken')||''}})
 }
 
 removeSpecificCart(productId:string):Observable<any>{
  return this.http.delete(`${baseUrl.BaseUrl}/cart/${productId}`,{headers:{token:localStorage.getItem('userToken')||''}})
 }

clearUserCart():Observable<any>{
  return this.http.delete(`${baseUrl.BaseUrl}/cart`,{headers:{token:localStorage.getItem('userToken')||''}})
 }


 checkOut(cartId:any,payload:any):Observable<any>{
  return this.http.post(`${baseUrl.BaseUrl}/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
    shippingAddress:payload
  },{headers:{token:localStorage.getItem('userToken')||''}})
 }
}