import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavbarComponent } from "./components/navbar/main-navbar/main-navbar.component";
import { MainFooterComponent } from "./components/footer/main-footer/main-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavbarComponent, MainFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marials Group';
}
