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

  Login(user: User) {
    return this.apiService.post('user/login', user)
      .pipe(map(data => data));
    // return this.apiService.post('user/login', { username: user.username, password: user.password })
    //   .pipe(map(data => data));
  }
}
