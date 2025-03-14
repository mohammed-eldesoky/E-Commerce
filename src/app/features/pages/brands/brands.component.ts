import { Component, OnInit } from '@angular/core';
import { Ibrands } from '../../../shared/interface/ibrands';
import { BrandsService } from '../../../core/services/Brands/brands.service';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
ALLbrands:Ibrands[]=[];
dataRes:boolean=false;
constructor(private _brand:BrandsService){

}
  ngOnInit(): void {
this.getBrands()
  }
  getBrands(){
    this.dataRes=true;
    this._brand.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res);
        
this.ALLbrands=res.data
console.log(this.ALLbrands);
this.dataRes=false;

      },
      error:(err)=>{
console.log(err);

      }
    })
  }


}
