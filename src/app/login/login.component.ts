import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="HAPPY BANKING"
  pldata="enter account no"

  login(a:any){
    console.log(a.value);
    
    alert("login clicked")
  }
  acnochange(event:any){
    console.log(event.target.value);
    
  }

  

}
