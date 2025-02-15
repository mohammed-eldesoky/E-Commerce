import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators}from '@angular/forms'
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isloading:boolean=false;
errmsg:string=''

  constructor(private _AuthService:AuthService,private router:Router){

  }


registerForm:FormGroup=new FormGroup ({
name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,}$/)]),
rePassword:new FormControl(null,[Validators.required]),
phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{validators:this.confirmpassword})
// custom validation
confirmpassword(group:AbstractControl){
const password=group.get('password')?.value;
const repassword=group.get('rePassword')?.value;
if (password == repassword){
return null;
}
else{
return {mismatch:true}
}

}




submitform(){
if (this.registerForm.invalid){
  this.registerForm.markAllAsTouched();
  return
}
else{
this.isloading=true;
  // console.log('touched',this.registerForm.get('name')?.touched);
  // console.log('errors',this.registerForm.get('name')?.errors);
  console.log(this.registerForm.value);
if(this.registerForm.valid){
  this._AuthService.register(this.registerForm.value).subscribe({
 next:(res)=>{
  this.isloading=false;
if(res.message=="success"){
  this.router.navigate(['/login'])
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
}
