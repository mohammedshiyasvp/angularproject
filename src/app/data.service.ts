import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata="I AM SHIYAZ"


  constructor() {}
    smethod(){
    alert("service method accessed")
    }
   
}
