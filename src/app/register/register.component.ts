import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  stdForm!: FormGroup; 
  searchName: string = ''; // Declare searchName property
  deleteName: string = ''; // Declare deleteName property
  updateName: string = '';
  searchResult: any;
  showUpdateForm: boolean = false;
 // Declare updateName property
  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient
  ) {}

  ngOnInit(): void {
      this.stdForm = this.formBuilder.group({
          name: ['', Validators.required],
          residence: ['', Validators.required],
          gender: ['', Validators.required],
          email: ['', Validators.required],
          phone: ['', Validators.required],
          dob: ['', Validators.required],
          password: ['', Validators.required]
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
                  console.log('Customer data stored successfully:', response);
                  this.stdForm.reset(); // Reset the form after successful submission
              },
              (error) => {
                  console.error('Error !!:', error);
              }
          );
  }

}