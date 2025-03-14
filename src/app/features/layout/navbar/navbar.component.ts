import { Component, Input, OnInit } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  // @Input() showlinks:boolean=true;
cartNumber!:number;
isLogin:boolean=false ;

//behavior => subscribe

  constructor(private flowbiteService: FlowbiteService,public auth:AuthService,private cart:CartService) {

    this.cart.cartNumber.subscribe({
      next:(res)=>{
this.cartNumber=res;
      }
    })
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });

    this.auth.userData.subscribe({
      next:(res)=>{
if(res !=null){
  this.isLogin=true
}
    else{
  this.isLogin=false
}
  },
      error:(err)=>{

      }


    })




  }
}
