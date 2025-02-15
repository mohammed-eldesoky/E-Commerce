import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

// export const checkTokenGuard: CanActivateFn = (route, state) => {
// let _auth:AuthService= inject (AuthService)
//   let _router=inject(Router)
//   if(_auth.userData.getValue() == null)
//   {
//     return true;
//   } 
  
//    _router.navigate(['./home'])
//    return false;
// };
