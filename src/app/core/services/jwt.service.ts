import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  token = "jwt";

  constructor() {
    if(window.sessionStorage[this.token] == null)
    {
      window.sessionStorage[this.token] = '';
    }
  }

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
