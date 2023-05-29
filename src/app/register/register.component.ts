import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  accno:any
  uname:any
  passw:any
  cpassw:any
  register(){
    console.log(this.accno);
    console.log(this.uname);
    console.log(this.passw);
    console.log(this.cpassw);
    // var accno =this.accno
    // console.log(accno);
    
    


    

  }

}
