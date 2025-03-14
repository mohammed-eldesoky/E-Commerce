import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isloading:boolean=false;
errmsg:string=''
  constructor(private _AuthService:AuthService,private router:Router){

  }



loginForm:FormGroup=new FormGroup ({

email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required]),

})

submitform(){


  this.isloading=true;
  
  console.log(this.loginForm.value);
if(this.loginForm.valid){
  this._AuthService.login(this.loginForm.value).subscribe({
 next:(res:any)=>{
  this.isloading=false;
if(res.message=="success"){
  this.router.navigate(['/home'])
// tokeeeen user
  localStorage.setItem('userToken',res.token)
  this._AuthService.decodeUserData()
}
console.log(res)
      },
error:(err)=>{
  this.isloading=false;
console.log(err.error.message)
  this.errmsg=err.error.message;
}

 })
}


  
}
}
