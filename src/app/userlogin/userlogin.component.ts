import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  stdForm!: FormGroup; 
  searchName: string = ''; // Declare searchName property
  deleteName: string = ''; // Declare deleteName property
  updateName: string = '';
  searchResult: any;
  showUpdateForm: boolean = false;
 // Declare updateName property
  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router // Inject Router into the component
  ) {}

  ngOnInit(): void {
      this.stdForm = this.formBuilder.group({
          Username: ['', Validators.required],
          Password: ['', Validators.required]
      });
  }
  storedata(): void {
      if (this.stdForm.invalid) {
          return;
      }

      const stdData = this.stdForm.value;
      console.log('Sending user data:', stdData);

      this.http.post<any>('http://localhost:3000/api/user', stdData)
          .subscribe(
              (response) => {
                  console.log(' data stored successfully:', response);
                  this.router.navigateByUrl('/userdash');
                  this.stdForm.reset(); // Reset the form after successful submission
              },
              (error) => {
                  console.error('Error !!:', error);
              }
          );
  }

}
