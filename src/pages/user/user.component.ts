import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IUser } from 'src/interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  users: IUser[] = [];
  currentUser: IUser;
  editedUser: IUser;
  isNewRecord: boolean;
  statusMessage: string;

  constructor( private usersService: UserService) { }

  ngOnInit() {

  }

  private loadUsers() {
    this.usersService.getUsers().subscribe((data: IUser[]) => {
            this.users = data;
        });
}



editUser(user: IUser) {
    this.editedUser = user;
}

saveUser() {
    if (this.isNewRecord) {
        this.usersService.createUser(this.editedUser).subscribe(data => {
            this.statusMessage = 'Data were added',
            this.loadUsers();
        });
        this.isNewRecord = false;
        this.editedUser = null;
    } else {
        this.usersService.updateUser(this.editedUser.id, this.editedUser).subscribe(data => {
            this.statusMessage = 'Date was update',
            this.loadUsers();
        });
        this.editedUser = null;
    }
}


deleteUser(user: IUser) {
    this.usersService.deleteUser(user.id).subscribe(data => {
        this.statusMessage = 'User was deleted',
        this.loadUsers();
    });
}
}
