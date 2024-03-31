import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // apiurl='https://65e7b5c853d564627a8f2940.mockapi.io/TravelExpense';
  apiurl='http://localhost:4000';
  constructor(private _http:HttpClient) {}
  getall(){
    return this._http.get(this.apiurl);
  }
  getbyid(id:any){
    return this._http.get(this.apiurl+'/'+id);
  }
  delete(id:any){
    return this._http.delete(this.apiurl+'/'+id);
  }
  insert(form:any){
    return this._http.post(this.apiurl,form);
  }
  update(id:any,form:any){
    return this._http.put(this.apiurl+'/'+id,form);
  }
}
