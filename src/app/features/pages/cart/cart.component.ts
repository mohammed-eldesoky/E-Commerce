import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import {  RootObject } from '../../../shared/interface/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  totalPrice:number=0;
  dataRes:boolean=false;
  cartList:RootObject[]=[];
  cartId!:string;
constructor(private cart:CartService){}

addCart(){
  this.dataRes=true;
  this.cart.getLogedcartt().subscribe({
next:(res)=>{
console.log(res)

this.totalPrice=res.data.totalCartPrice;
this.cartList=res.data.products
this.cartId=res.cartId
this.cart.cartNumber.next(res.numOfCartItems)
this.dataRes=false
},

error:(err)=>{
  console.log(err)
}
  })
}

updateCard(productId:string,count:number){
  console.log("pppppppppp",productId);
  
this.cart.updateCart(productId,count).subscribe({
next:(res)=>{
  this.totalPrice=res.data.totalCartPrice;
  this.cartList=res.data.products
  this.cart.cartNumber.next(res.numOfCartItems)

},
error:(err)=>{
  console.log(err);
  
}
})
}

removeProduct(productId:string){
this.cart.removeSpecificCart(productId).subscribe({
  next:(res)=>{
    // this.totalPrice=res.data.totalCartPrice;
    // this.cartList=res.data.product
   this.addCart();
   this.cart.cartNumber.next(res.numOfCartItems)
  }
})
}



clear(){
  this.cart.clearUserCart().subscribe({
    next:()=>{
      this.addCart()
    }
  })
}

  ngOnInit(): void {
    this.addCart();
  }


}
