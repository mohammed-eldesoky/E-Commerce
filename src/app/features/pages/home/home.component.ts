import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent,DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  date=new Date();
}
