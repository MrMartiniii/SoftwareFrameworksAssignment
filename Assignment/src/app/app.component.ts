import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment';
}
