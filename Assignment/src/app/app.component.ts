import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, GroupsComponent, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'Assignment';

  constructor(private router:Router) {}

  ngOnInit(){
    this.router.navigateByUrl('/login');
  }
}
