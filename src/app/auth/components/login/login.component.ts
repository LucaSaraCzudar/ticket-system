import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {UserCredentials} from "../../models/user-credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UserCredentials = {
    email: '',
    password: ''
  }

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.user.email, this.user.password);
  }

}
