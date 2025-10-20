import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      this.isLoggedIn.set(!!token);
    }
  }

  login(email: string, password: string): boolean {
    // Mock login logic
    if (email && password) {
      localStorage.setItem('authToken', 'fake-token');
      this.isLoggedIn.set(true);
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authToken');
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}