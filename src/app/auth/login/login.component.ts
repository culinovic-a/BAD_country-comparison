import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showErrorMessage = false;

  // MOCK DATA FOR LOGIN
  user = {
    username: 'admin',
    password: 'admin'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.get('username').value === this.user.username && this.loginForm.get('password').value === this.user.password) {
      this.router.navigateByUrl('/dashboard');
      // SETTING THIS BOOLEAN FOR AUTH GUARD
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      this.showErrorMessage = true;
    }
  }

}
