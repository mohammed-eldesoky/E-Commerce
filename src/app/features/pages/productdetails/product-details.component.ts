import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { products } from '../../../shared/interface/iproducts';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../core/services/cart/cart.service';


@Component({
  selector: 'app-product-details',
  imports: [],
 
templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent  {
  id:any;
  details!:products;
constructor(private activatedrout:ActivatedRoute,private product:ProductsService,private cartser:CartService,private tostar:ToastrService ){
activatedrout.params.subscribe(res=>{
  console.log(res);
  this.id=res['id']
})
}
  ngOnInit(): void {
  this.getSpasififcproducts()
  }

  getSpasififcproducts(){
    this.product.getspecificProduct(this.id).subscribe({
      next:(res)=>{
console.log(res);
this.details=res.data
      },
      error:(err)=>{
console.log(err);

      }
    })
  }
  

    
  addProduct(id:string){
    this.cartser.addTocart(id).subscribe({
next:(res)=>{
console.log(res);
this.tostar.success(res.message,"success",{
  progressBar:true,
})

},
error:(err)=>{
console.log(err);

}
    })
  }

}
