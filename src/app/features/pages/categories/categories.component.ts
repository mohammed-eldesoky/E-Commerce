import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category/category.service';
import { Cat } from '../../../shared/interface/cat';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  dataRes:boolean=false;
Allcat:Cat[]=[];

constructor(private CAt:CategoryService){

}
  ngOnInit(): void {
    this.getCat()
  }

getCat(){
  this.dataRes=true;
  this.CAt.getallCat().subscribe({
    next:(res)=>{
this.Allcat=res.data
this.dataRes=false;
    },


error:(err)=>{

}

  })
}




}
