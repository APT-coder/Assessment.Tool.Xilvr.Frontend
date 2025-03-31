import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(private router: Router){}

  isRegisterMode = false;

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
  }

  login(){
    this.router.navigate(['/']);
  }
}
