import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { DatePipe } from '@angular/common';
import { HomesliderComponent } from "../homeslider/homeslider.component";
import { CategoeySliderComponent } from "../categoey-slider/categoey-slider.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, DatePipe, HomesliderComponent, CategoeySliderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  date=new Date();
}
