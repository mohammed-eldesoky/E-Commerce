import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { products } from '../../../shared/interface/iproducts';

import { FilterPipe } from "../../../shared/pipe/filter.pipe";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [FilterPipe,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class  ProductsComponent implements OnInit {
word:string='';
dataRes:boolean=false;
  productlist:products[]=[];
constructor(private _ProductsService:ProductsService,private cartser:CartService,private tostar:ToastrService){

}
  ngOnInit(): void {
    this.getallproducts()
  }
getallproducts(){
  this.dataRes=true;
  this._ProductsService.getProducts().subscribe({
    next:(res)=>{
      this.productlist=res.data;
console.log(res);
this.dataRes=false;

    },
    error:(err)=>{
      console.log(err);
      console.log('hjghjghjgh')
    }
  })

}
  



addProduct(id:string){
  if (!localStorage.getItem('userToken')) { // check login 
    this.tostar.warning('Please Login First ', 'Sorry', {
      progressBar: true,
    });
    return;
  }

  this.cartser.addTocart(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.tostar.success(res.message,"success",{
        progressBar:true,
      });


      this.cartser.getLogedcartt().subscribe({  // update badge
        next: (res) => {
          this.cartser.cartNumber.next(res.numOfCartItems);
        }
      });
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

}


