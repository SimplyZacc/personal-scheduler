import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "../Models/User";
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  user?: User;

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
    ) { }

  Login(userName: string, password: string){
    this.apiService.post('login',{ User: { body: userName } } )
      .pipe(map(data => data.data));
  }

  postFoods(newFood: User): Observable<User> {
    return this.apiService
      .post(
        'api/Food', { Food: { body: newFood } }
      ).pipe(map(data => data.Food));
  }
}
