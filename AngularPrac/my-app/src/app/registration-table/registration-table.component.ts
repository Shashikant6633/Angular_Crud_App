// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-registration-table',
//   templateUrl: './registration-table.component.html',
//   styleUrls: ['./registration-table.component.css'] // Use styleUrls instead of styleUrl
// })
// export class RegistrationTableComponent {
//   @Input() registrationData!: any[]; // Define registrationData as an input property

//   constructor() { }
// }

// import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-registration-table',
//   templateUrl: './registration-table.component.html',
//   styleUrls: ['./registration-table.component.css']
// })
// export class RegistrationTableComponent implements OnInit {
//   @Input() registrationData: any[] = [];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//    // this.loadData();

//    this.registrationData = [
//     { name: 'John Doe', email: 'john@example.com', phoneNumber: '1234567890' },
//     { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '9876543210' }
//     // Add more objects as needed
//   ];

  
//   }

//   loadData(): void {
//     // Adjust the API URL as per your backend endpoint
//     const apiUrl = 'http://localhost:5297/api/User/register';

//     this.http.get<any[]>(apiUrl).subscribe(data => {
//       this.registrationData = data;
//     });
//   }
// }


import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.css']
})
export class RegistrationTableComponent implements OnInit {
  @Input() registrationData: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Adjust the API URL as per your backend endpoint
    const apiUrl = 'http://localhost:5297/api/User';

    this.http.get<any[]>(apiUrl).subscribe(data => {
      this.registrationData = data;
    });
  }
    
  edit(data: any): void {
    // Implement edit functionality here, e.g., open a modal or navigate to edit page
    console.log('Edit data:', data);
    this.router.navigate(['/edit', data.id]);
  }

  delete(data: any): void {
    // Implement delete functionality here
    const apiUrl = `http://localhost:5297/api/User/${data.id}`;

    this.http.delete(apiUrl).subscribe(data => {
      // Update the table after deletion
      this.loadData();
      console.log('Record deleted:', data);
    });
  }
}

