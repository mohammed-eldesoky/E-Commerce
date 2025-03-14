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
import { authGuard } from './core/guard/auth-guard/auth.guard';
import { ProductDetailsComponent } from './features/pages/productdetails/product-details.component';
import { AllOrdersComponent } from './features/pages/all-orders/all-orders.component';
import { CheckoutComponent } from './features/pages/checkout/checkout.component';
import { RestPasswordComponent } from './features/pages/rest-password/rest-password.component';
// import { checkTokenGuard } from './core/guard/check-token.guard';


export const routes: Routes = [

    {path:'',component:AuthLayoutComponent,children:[
        {path:'login',component:LoginComponent,title:'login'},
        {path:'signup',component:RegisterComponent,title:'signup'}
]},
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent,title:'home'},
        {path:'cart',component:CartComponent,canActivate:[authGuard],title:'cart'},
        {path:'products',component:ProductsComponent,title:'products'},
        {path:'allorders',component:AllOrdersComponent,title:'allOrders'},
        {path:'pay/:id',component:CheckoutComponent,title:'payment'},
        {path:'productDetails/:id',component:ProductDetailsComponent,title:'product details'},
        {path:'brands',component:BrandsComponent,title:'brands'},
        {path:'rest',component:RestPasswordComponent,title:'forgetPass'},
         {path:'categories',component:CategoriesComponent,title:'categories'},
        {path:'home',component:HomeComponent,title:'home'},
    ]}
];
