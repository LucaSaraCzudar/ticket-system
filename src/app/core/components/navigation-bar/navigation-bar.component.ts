import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {

  isMenuCollapsed = true;
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  constructor(private readonly authService: AuthService) {}

  onLogout(): void {
    this.isMenuCollapsed = true;
    this.authService.logout();
  }
}
