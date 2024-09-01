import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:8888';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

groups = ['group1','group2'];
isAdmin = false;


constructor(private httpClient: HttpClient, private commonModule:CommonModule, private router:Router) {

  this.username = sessionStorage.getItem("username")!;
  this.userid = Number(sessionStorage.getItem("userid"));
}

ngOnInit() {
  if (JSON.parse(sessionStorage.getItem("roles")!)[0] == "SuperAdmin") {
    this.isAdmin = true;
  }
}

  userid = 0;
  username = '';
  roles = '';

  newGroup = '';
  
addGroup() {
  this.groups.push(this.newGroup)
}

logOut() {
  sessionStorage.clear()
  this.router.navigateByUrl('/login');
}

get() {
  console.log(JSON.parse(sessionStorage.getItem("roles")!));
  return this.username
}

}
