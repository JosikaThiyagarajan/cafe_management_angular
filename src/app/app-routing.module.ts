import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationformComponent } from './navigationform/navigationform.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './loginform/loginform.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserdashComponent } from './userdash/userdash.component';
import { OrderformComponent } from './orderform/orderform.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsComponent } from './products/products.component';
import { ListusersComponent } from './listusers/listusers.component';

 const routes: Routes =[
  {path:'',component:NavigationformComponent},
  {path:'navigationform',component:NavigationformComponent},
  {path:'register',component:RegisterComponent},
  {path:'loginform',component:LoginFormComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userdash',component:UserdashComponent},
  {path:'orderform',component:OrderformComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'products',component:ProductsComponent},
  {path:'listusers',component:ListusersComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}


