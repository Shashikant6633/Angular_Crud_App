// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormService {

//   constructor() { }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormService {

//   private apiUrl = 'http://example.com/api/form'; // Replace with your backend API URL

//   constructor(private http: HttpClient) { }

//   submitForm(formData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, formData);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root' // Provide the service at the root level
// })
// export class FormService {

//   private apiUrl = 'http://localhost:5120/api/User/register'; // Replace with your backend API URL

//   constructor(private http: HttpClient) { }

//   submitForm(formData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, formData);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root' // Provide the service at the root level
// })
// export class FormService {

//   private apiUrl = 'http://localhost:5297/api/User/register'; // Replace with your backend API URL

//   constructor(private http: HttpClient) { }

//   // Modify the method to fetch data instead of submitting a form
//   // getData(): Observable<any[]> {
//   //   return this.http.get<any[]>(this.apiUrl);

//   getUserData(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   submitForm(formData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, formData);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:5297/api/User'; // Base URL for user API
  private registerUrl = `${this.apiUrl}/register`; // URL for registering users

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, formData);
  }

  updateUser(id: number, formData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, formData);
  }
}

