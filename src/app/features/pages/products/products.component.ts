import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { products } from '../../../shared/interface/iproducts';
import { DatePipe } from '@angular/common';
import { FilterPipe } from "../../../shared/pipe/filter.pipe";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FilterPipe,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class  ProductsComponent implements OnInit {
word:string='';

  productlist:products[]=[];
constructor(private _ProductsService:ProductsService){

}
  ngOnInit(): void {
    this.getallproducts()
  }
getallproducts(){
  this._ProductsService.getProducts().subscribe({
    next:(res)=>{
      this.productlist=res.data;
console.log(res);

    },
    error:(err)=>{
      console.log(err);
      console.log('hjghjghjgh')
    }
  })
}
  
  
}


