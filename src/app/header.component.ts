import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg bg-light border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="['/']">Test</a>
        <div class="d-flex align-items-center">
          <span class="me-3" *ngIf="userEmail">{{ userEmail }}</span>
          <button class="btn btn-outline-primary me-2" (click)="navigateToUsers()">Users</button>
          <button class="btn btn-primary" (click)="navigateToLogin()">Login</button>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  userEmail = '';

  private router = inject(Router)

  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
