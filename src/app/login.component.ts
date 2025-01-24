// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="row vh-100">
        <div class="col-md-6 col-lg-4 m-auto">
          <div class="card">
            <div class="card-body">
              <h2 class="text-center mb-4">Login</h2>

              <form (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    [class.is-invalid]="false"
                  >
                  <div class="invalid-feedback" *ngIf="false">
                    <span *ngIf="false">Email is required</span>
                    <span *ngIf="false">Please enter a valid email</span>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    [class.is-invalid]="false"
                  >
                  <div class="invalid-feedback" *ngIf="false">
                    <span *ngIf="false">Password is required</span>
                    <span *ngIf="false">Password must be at least 6 characters</span>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary w-100"
                  [disabled]="true"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
  }
}
