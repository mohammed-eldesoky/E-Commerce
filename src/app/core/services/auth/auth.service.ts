import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../../../shared/interface/auth';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { platform } from 'os';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:BehaviorSubject<null | JwtPayload>= new BehaviorSubject<null | JwtPayload> (null) ;
  constructor(private _HttpClient:HttpClient, @Inject(PLATFORM_ID) Id:object,private router:Router ) {
 if(isPlatformBrowser(Id)){
  if(localStorage.getItem('userToken') !==null){
this.decodeUserData();
  }
 }
   }

  register(formData:Auth):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formData)
  }

  login(formData:Auth){
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formData)
  }

  decodeUserData(){
    const token =localStorage.getItem('userToken')||'';
    const decoded = jwtDecode(token);
    this.userData.next(decoded);
    console.log(this.userData);
    
  }


  logOut(){
    //1-remove token from localstorage
    //2-userdata=null
    //3-navigate to login 
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this.router.navigate(['./login'])
  }
  
}
