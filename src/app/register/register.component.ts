import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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

  constructor(private ds:DataService,private router:Router){}
  
 signup(){
    // console.log(this.accno);
    // console.log(this.uname);
    // console.log(this.passw);
    // console.log(this.cpassw);
    var uname =this.uname
    var accno =this.accno
    var passw =this.passw
    var cpassw =this.cpassw

    // console.log(accno);
    
    if (passw==cpassw){
      this.ds.register(uname,accno,passw).subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl("")
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
    else{
      alert('PASSWORD DOESNT MATCH')
    }
    


    

  }

}
