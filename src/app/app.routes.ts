import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './features/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './features/layout/main-layout/main-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/pages/home/home.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { ProductsComponent } from './features/pages/products/products.component';
import { BrandsComponent } from './features/pages/brands/brands.component';
import { CategoriesComponent } from './features/pages/categories/categories.component';

export const routes: Routes = [

    {path:'',component:AuthLayoutComponent,children:[
        {path:'login',component:LoginComponent,title:'login'},
        {path:'signup',component:RegisterComponent,title:'signup'}
]},
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent,title:'home'},
        {path:'cart',component:CartComponent,title:'cart'},
        {path:'products',component:ProductsComponent,title:'products'},
        {path:'brands',component:BrandsComponent,title:'brands'},
         {path:'categories',component:CategoriesComponent,title:'categories'},
        {path:'home',component:HomeComponent,title:'home'},
    ]}
];
