import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UsersService } from './users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  users: User[] = [];
  formAddUser: FormGroup;
  subscription:Subscription;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.subscription= this.userService.usersChanged.subscribe(
      (users:User[])=>{
        this.users=users;
      }
    )
    this.users=this.userService.getUsers();
    this.initForm();
  }
  private initForm() {
    let firstname = '';
    let lastname = '';
    let email = '';
    let phone = '';
    let role = '';
    this.formAddUser = new FormGroup({
      'firstname': new FormControl(firstname, Validators.required),
      'lastname': new FormControl(lastname, Validators.required),
      'email': new FormControl(email, Validators.required),
      'phone': new FormControl(phone, Validators.required),
      'role': new FormControl(role, Validators.required)
    });
  }
  onSubmit() {
    const user=new User(this.formAddUser.value['firstname'],
    this.formAddUser.value['lastname'],
    this.formAddUser.value['email'],
    this.formAddUser.value['phone'],
    this.formAddUser.value['role'],
    )
    this.userService.addUser(user);
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
