import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // sdata="I AM SHIYAZ"


  constructor(private http: HttpClient) { }
  // smethod(){
  // alert("service method accessed")
  // }

  //api request
  //api to register
  register(uname: any, acno: any, passw: any) {
    const bodydata = {
      uname,
      acno,
      passw
    }
    return this.http.post('http://localhost:3001/register', bodydata)
  }

  //api request
  //api to login

  login(acno: any, passw: any) {
    const body = {
      acno,
      passw
    }
    return this.http.post('http://localhost:3001/login', body)
  }



}
