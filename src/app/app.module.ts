
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationformComponent } from './navigationform/navigationform.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './loginform/loginform.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { UserdashComponent } from './userdash/userdash.component';
import { OrderformComponent } from './orderform/orderform.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsComponent } from './products/products.component';
import { ListusersComponent } from './listusers/listusers.component';
import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationformComponent,
    LoginFormComponent,
    UserloginComponent,
    AdminloginComponent,
    AdmindashComponent,
    UserdashComponent,
    OrderformComponent,
    RegisterComponent,
    CartPageComponent,
    ProductsComponent,
    ListusersComponent,
    OrderComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: class {
        intercept(req: any, next: any) {
          req.fetch = fetch;
          return next.handle(req);
        }
      },
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
