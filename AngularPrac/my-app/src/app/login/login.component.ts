import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (data) => {
          // Login successful
          // Redirect to dashboard or any other page
          this.router.navigate(['/registration-table']);
  
          // Show success toast notification
          this.toastr.success('Login successful', 'Success');
        },
        (error) => {
          // Handle login error (e.g., display error message)
          this.toastr.error('Login failed. Please check your credentials.', 'Error');
        }
      );
  }
}
