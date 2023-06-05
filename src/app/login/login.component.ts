import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  data="HAPPY BANKING"
  pldata="enter account no"

  ServiceData:any

  acno:any
  passw:any

  constructor(private rout:Router,private datas:DataService){

  }
  ngOnInit():void {
    // this.ServiceData=this.datas.sdata
    // console.log(this.ServiceData);
    // this.datas.smethod()
    
  }

  // login(a:any){
  //   console.log(a.value);
    
  //   alert("login clicked")
  //   this.rout.navigateByUrl('home')
  // }
  // acnochange(event:any){
  //   console.log(event.target.value);
    
  // }

  login(){
    // console.log(this.acno);
    // console.log(this.passw);
    var acno=this.acno
    var passw=this.passw
   
    this.datas.login(acno,passw).subscribe((result:any)=>{
      alert(result.message)
          this.rout.navigateByUrl('home')

    },
    result=>{
      alert(result.error.message)
      this.rout.navigateByUrl('register')

    }
    )
    
    
  }

  

}
