import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import users from '../../assets/users.json';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersChanged = new Subject<User[]>();
  private usersData: User[] = users;
  constructor() { }

  getUsers() {
    return this.usersData.slice();
  }
  addUser(user: User) {
    this.usersData.push(user);
    this.usersChanged.next(this.usersData.slice());
  }
}
