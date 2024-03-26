import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    // Assuming your backend API endpoint for login is '/api/login'
    return this.http.post<any>('http://localhost:5297/api/Login/login', { username, password });
  }

  isAuthenticated(): boolean {
    // Check if localStorage is available before accessing it
    if (typeof localStorage !== 'undefined') {
      // Implement your logic to check if the user is authenticated
      // For example, check if there is a valid authentication token
      const authToken = localStorage.getItem('authToken');
      return !!authToken; // Convert authToken to boolean
    } else {
      // If localStorage is not available, assume the user is not authenticated
      return false;
    }
  }

  logout() {
    // Clear authentication token and navigate to the login page
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('/login');
  }
}
