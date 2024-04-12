import { Component, inject } from '@angular/core';
import { UserModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new UserModel (0,'','','',2);
  confirmar_password : string = '';

  _us = inject(UsersService);
  router = inject(Router);
  //constructor(private _us: UsersService) {}

  procesa(){
    if (this.user.password != this.confirmar_password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden"
      });
    } else {
      this._us.postUser(this.user).subscribe(
        resp => {
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "El usuario fue creado"
          });
          this.router.navigate(['home']);
        },
        error => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "El usuario no se pudo crear"
          });
        }
      );
    }
  }
}
