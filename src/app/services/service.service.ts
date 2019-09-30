import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Photos } from '../models/photos-model';
import {apiConstants} from '../constants/apiConstants';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //Make instance from apiConstants
   api=new apiConstants();
  constructor(public http: HttpClient) { }
//Call get photos data API 
  get():Observable<Photos[]>{
    return this.http.get<Photos[]>(this.api.GetPhotosAPI);
   }
}
