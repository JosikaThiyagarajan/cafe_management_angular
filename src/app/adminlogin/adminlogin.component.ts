import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private router: Router) { }

  username:string='';
  password:string='';
  msg:string='';
  
  login(): void {
    if (this.username === 'admin' && this.password === '1234') 
    {
      this.router.navigateByUrl('/admindash');
      this.msg="successful login";
    } else 
    {
      this.msg= "unsuccessful login";
    }
  }
}
