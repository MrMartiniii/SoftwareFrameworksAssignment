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

isAdmin = false;


constructor(private httpClient: HttpClient, private commonModule:CommonModule, private router:Router) {

  this.username = sessionStorage.getItem("username")!;
  this.userid = Number(sessionStorage.getItem("userid"));

  this.groupName = JSON.parse(sessionStorage.getItem("groupName")!);
}

ngOnInit() {
  if (JSON.parse(sessionStorage.getItem("roles")!)[0] == "SuperAdmin") {
    this.isAdmin = true;
  }

}

  groupName = [];
  userid = 0;
  username = '';
  roles = '';

  newGroup = '';
  
addGroup() {
  let groupObj = {
    "groupName":this.newGroup,
    "admins":[this.username]
  }

  this.httpClient.post<any>(BACKEND_URL + '/groups', groupObj, httpOptions)
    .subscribe((a: any) => {alert(JSON.stringify(a));});

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
