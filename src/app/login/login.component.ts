import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../core/Models/User';
import { HomeService } from "../core/services/home.service";
import { JwtService } from "../core/services/jwt.service";
import { UserService } from "../core/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(4)]],
    password: ['', Validators.required],
  });
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(private homeService: HomeService,
              private jwt: JwtService,
              private fb: FormBuilder,
              private router: Router,
              private user: UserService,
              ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const user: User = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    var a = this.homeService.Login(user);

    a.subscribe(data => {
      if(data.status)
      {
        this.jwt.saveToken(data.data.token);
        this.user.saveName(data.data.name);
        this.router.navigateByUrl('/main');
      } else{
        alert("Incorrect username or Password.")
      }
    });
  }


}
