import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category/category.service';
import { Cat } from '../../../shared/interface/cat';
import { NgFor } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categoey-slider',
  imports: [NgFor,CarouselModule],
  templateUrl: './categoey-slider.component.html',
  styleUrl: './categoey-slider.component.scss'
})
export class CategoeySliderComponent implements OnInit {
catlist:Cat[]=[];
  constructor (private cat:CategoryService){

}
 ngOnInit(): void {
   this.getAllCat()
  }
getAllCat(){
  this.cat.getallCat().subscribe({
next:(res)=>{
this.catlist=res.data
}

  })
}
 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
