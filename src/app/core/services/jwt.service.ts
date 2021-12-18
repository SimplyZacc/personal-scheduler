import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  token = "jwt";

  constructor() { }

  getToken(): string {
    return window.sessionStorage[this.token];
  }

  saveToken(token: string) {
      window.sessionStorage[this.token] = token;
  }

  destroyToken() {
    window.sessionStorage.removeItem(this.token);
  }

}
