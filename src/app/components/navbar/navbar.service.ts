import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  title: String;

  constructor() {
    this.title="as";
   }

   setTitle(newTitle: String){
    this.title = newTitle;
   }
}
