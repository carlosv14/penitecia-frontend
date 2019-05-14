import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Users } from '../mocks/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;

  constructor() { }

  ngOnInit() {
    this.users = Users;
  }

  onClick(user: User) : void{
    this.selectedUser = user;
  }
}
