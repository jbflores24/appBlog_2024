import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { UserModel } from '../../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrl: './gestion-user.component.css'
})
export class GestionUserComponent {
  user_id : any;
  user = new UserModel(0,'','','',0);

  constructor(  private ar: ActivatedRoute,
                private _us : UsersService,
                private router : Router
  ) {
    this.user_id = this.ar.snapshot.paramMap.get('id');
    this._us.getUser(this.user_id).subscribe(
      (resp: any) => {
        this.user = resp['data']['0'];
        console.log(this.user);
      }
    );
  }

  editar(){
    this._us.putUser(this.user).subscribe(
      resp => {
        Swal.fire(
          {
            icon: 'success',
            title: 'Éxito',
            text : "Se ha actualizado la información del usuario.",
          }
        );
        this.router.navigate(['users']);
      },
      err => {
        Swal.fire(
          {
            icon: 'error',
            title: 'Error',
            text : "No se ha podido editar el usuario.",
          }
        );
      }
    );
  }

  borrar(){
    this._us.deleteUser(this.user.id).subscribe(
      resp => {
        Swal.fire(
          {
            icon: 'success',
            title: 'Éxito',
            text : "Se ha eliminado el usuario.",
          }
        );
        this.router.navigate(['users']);
      },
      err => {
        Swal.fire(
          {
            icon: 'error',
            title: 'Error',
            text : "No se ha podido eliminar el usuario.",
          }
        );
      }
    );
  }
}
