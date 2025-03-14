import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestPasswordService } from '../../../core/services/restPassword/rest-password.service';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-password',
  imports: [ReactiveFormsModule,NgIf],
 
templateUrl: './rest-password.component.html',
  styleUrl: './rest-password.component.scss'
})
export class RestPasswordComponent {
steps:number=1;
constructor(private reset:RestPasswordService,private tostar:ToastrService,private auth:AuthService,private router:Router){

}

sendEmail:FormGroup=new FormGroup({
email:new FormControl(null,[Validators.required,Validators.email])
})

submitEmail(){
this.reset.verifyEmali(this.sendEmail.value).subscribe({
  next:(res:any)=>{
   if(res.statusMsg == "success"){
this.steps=2;
this.tostar.success(res.message,'succsess',{
  progressBar:true
})
}
  },
  error:(err)=>{

  }
  
})
}

verifyCode:FormGroup=new FormGroup({

  resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6}$/)])
})
submitCode(){
  this.reset.verifyCode(this.verifyCode.value).subscribe({
    next:(res:any)=>{
      if(res.status == "Success"){
        this.steps=3;
        this.tostar.success(res.message,'succsess',{progressBar:true})


      }

    },
    error:(err)=>{

    }


   })



}



restPass:FormGroup=new FormGroup({

  email:new FormControl(null,[Validators.required,Validators.email]),


  newPassword:new FormControl(null,[Validators.required])

})
submitNewpass(){
  this.reset.resetPass(this.restPass.value).subscribe({
    next:(res:any)=>{
if(res.token){
localStorage.setItem('userToken',res.token)

this.auth.decodeUserData();
this.router.navigate(['/home'])

}
    }
  })
}

}
