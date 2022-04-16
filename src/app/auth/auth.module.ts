import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from "../shared/shared.module";
import {FirebaseOptions} from "@firebase/app";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { RegistrationComponent } from './components/registration/registration.component';
import {FirestoreModule} from "@angular/fire/firestore";
import {FirebaseAppModule} from "@angular/fire/app";

const fireBaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCQQ4oHsgjt5uVrOJays_yn0nOHv26U6tc",
  authDomain: "ticket-system-acc32.firebaseapp.com",
  projectId: "ticket-system-acc32",
  storageBucket: "ticket-system-acc32.appspot.com",
  messagingSenderId: "85751767194",
  appId: "1:85751767194:web:2ee1d77922ea06f5bf3f23",
  measurementId: "G-7MQ4N9P9DC"
};

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
    FirestoreModule,
  ]
})
export class AuthModule {
}
