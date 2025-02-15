import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';



export const authGuard: CanActivateFn = (route, state) => {

  let _auth:AuthService= inject (AuthService)
  let _router=inject(Router)
  if(_auth.userData.getValue() !== null)
  {
    return true;
  }  
   _router.navigate(['./login'])
   return false;


};
