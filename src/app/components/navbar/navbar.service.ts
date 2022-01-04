import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  title = new BehaviorSubject<String>('');
  newtitle = this.title.asObservable();

  constructor() {
  }

  setTitle(newTitle: String) {
    this.title.next(newTitle);
  }

  getTitle() : Observable<String>{
    return this.newtitle;
  }
}
