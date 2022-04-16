import { Component, OnInit } from '@angular/core';
import {UserCredentials} from "../../models/user-credentials";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  user: UserCredentials = {
    email: '',
    password: ''
  }

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.emailSignup(this.user.email, this.user.password);
  }

}
