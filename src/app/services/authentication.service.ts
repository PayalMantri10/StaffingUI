import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(value) {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null), value)
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}