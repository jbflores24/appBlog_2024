import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users : UserInterface[] = [];
  constructor (private _us : UsersService){
    this._us.getUsers().subscribe(
      (resp:any) => {
        this.users = resp['data'];
        console.log(this.users)
      }
    );
  }
}
