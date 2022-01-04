import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  name = "username";

  constructor() { }

  getName(): string {
    return window.sessionStorage[this.name];
  }

  saveName(name: string) {
      window.sessionStorage[this.name] = name;
  }

  destroyName() {
    window.sessionStorage.removeItem(this.name);
  }
}
