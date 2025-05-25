import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaritimeNavbarComponent } from './layouts/maritime-navbar/maritime-navbar.component';
import { MaritimeFooterComponent } from './layouts/maritime-footer/maritime-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MaritimeNavbarComponent,
    MaritimeFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maritime';
}
