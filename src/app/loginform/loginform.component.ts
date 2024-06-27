
// loginform.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent {
 

  constructor(private router: Router) {}

  login(): void {
    // You can implement your login logic here
    // For now, let's just navigate to a dummy route
  
  }
}
