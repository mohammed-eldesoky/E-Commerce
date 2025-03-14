import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constant/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }

getAllBrands():Observable<any>{
  return this._HttpClient.get(`${baseUrl.BaseUrl}/brands`);
}

}
