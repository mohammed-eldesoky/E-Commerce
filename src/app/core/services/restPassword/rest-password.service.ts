import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../../../shared/interface/auth';

@Injectable({
  providedIn: 'root'
})
export class RestPasswordService {

  constructor(private http:HttpClient) { }

verifyEmali(payload:Auth){
  return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,payload)
}
verifyCode(payload:Auth){
  return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,payload)
}
resetPass(payload:Auth){
  return this.http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,payload)
}
}
