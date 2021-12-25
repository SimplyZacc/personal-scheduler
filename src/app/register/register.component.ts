import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../core/Models/User';
import { HomeService } from "../core/services/home.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

	passwordMatch: Boolean = true;

	registerForm = this.fb.group({
		username: ['', [Validators.required, Validators.minLength(4)]],
		password: ['', Validators.required],
		passwordConf: ['', Validators.required],
	});

	constructor(
		private homeService: HomeService,
		private fb: FormBuilder,
		private router: Router,
	) { }

	ngOnInit(): void {
	}

	onSubmit() {

		if (this.passwordMatch) {
			const user: User = {
				username: this.registerForm.value.username,
				password: this.registerForm.value.password,
			};

			var a = this.homeService.Register(user);

			a.subscribe(data => {
				if (data.status) {
					alert("User registered Sucessfully.")
					this.router.navigateByUrl('/login');
				} else {
					alert("Something went wrong please try again later")
				}
			});
		}else{
      alert("Passwords must match!")
    }

	}

	onPasswordConfChange() {
		if (this.registerForm.value.password === this.registerForm.value.passwordConf) { this.passwordMatch = true; }
		else {
			this.passwordMatch = false;
		}
	}




}
