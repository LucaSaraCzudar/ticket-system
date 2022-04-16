import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Observable<boolean> = this.afAuth.user.pipe(map(user => !!user));

  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly router: Router,
    private readonly firestore: AngularFirestore) {
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value);
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value);
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
