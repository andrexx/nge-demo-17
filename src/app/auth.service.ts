import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(): void {}

  logout(): void {}


  isLoggedIn(): boolean {
    return false;
  }

  getCurrentUser() {
    return {};
  }}
