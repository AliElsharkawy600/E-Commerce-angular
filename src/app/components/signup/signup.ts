import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
name = '';
  email = '';
  password = '';
  router = inject(Router);

  signup() {
    console.log('User signed up:', { name: this.name, email: this.email });
    this.router.navigate(['/login']);
  }
}
