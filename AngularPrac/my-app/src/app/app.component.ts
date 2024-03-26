import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  parentMessage = "Message from parent component to Child Component";
  registrationData: any[] = []; // Declare registrationData as a class member

  username: string = ''; // Define the username property
  password: string = ''; // Define the password property

  isLoggedIn: boolean = false; 

  constructor(private authService: AuthService, private router: Router,private cdr: ChangeDetectorRef) { // Inject AuthService and Router
  }

  ngOnInit() {
    // Check if user is already logged in when the component initializes
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    // Call logout method from your authentication service
    this.authService.logout();
    // Update isLoggedIn property
    this.isLoggedIn = false;
    // Redirect to the login page or any other appropriate page
    this.router.navigateByUrl('/login');
  }


  handleEvent(data: string) {
    console.log('Data received from child component:', data);

    // You can now access this.registrationData and modify it here
    
    this.registrationData = []; // Reset registrationData to an empty array
  }
}
