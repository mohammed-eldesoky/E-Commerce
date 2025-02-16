import { Pipe, PipeTransform } from '@angular/core';
import { products } from './../interface/iproducts';
import { ProductsService } from './../../core/services/products/products.service';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(products: products[], serchvalue:string): products[] {
//     return products.filter((product)=>{
// return  product.title.toUpperCase().includes(serchvalue.toUpperCase())
//     });
//   }

// }
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: products[], searchValue: string): products[] {
    if (!products || !searchValue) {
      return products; // إرجاع المنتجات كما هي إذا لم يكن هناك قيمة بحث
    }

    return products.filter((product) => 
      product?.title?.toUpperCase().includes(searchValue.toUpperCase())
    );
  }
}
