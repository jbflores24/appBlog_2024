import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from '../../../models/articulo.model';
import { ArticlesService } from '../../../services/articles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-articulo',
  templateUrl: './gestion-articulo.component.html',
  styleUrl: './gestion-articulo.component.css'
})
export class GestionArticuloComponent {
  article_id : any;
  article = new ArticleModel(0,'','','',0);
  archivo : any;
  op = false; //op : true si es altas, op = false si es editar
  constructor(  private ar: ActivatedRoute,
                private _as : ArticlesService,
                private r : Router
  ) {
    this.article_id = this.ar.snapshot.paramMap.get('id');
    if (this.article_id == 0){
      this.op = true;
    } else {
      this.op = false;
    }
    this._as.getArticle(this.article_id).subscribe(
      (resp:any) => {
        this.article = resp['data']['0'];
        console.log(this.article);
      }
    );
  }

  cargarImagen (evt : any):any{
    this.archivo =  evt.target.files[0];
  }

  agregar(){
    this.article.user_id=2;
    const fd = new FormData();
    fd.append('titulo', this.article.titulo);
    fd.append('texto', this.article.texto);
    fd.append('imagen', this.archivo);
    fd.append('user_id', this.article.user_id);
    this._as.postArticle(fd).subscribe(
      (resp : any) => {
        Swal.fire(
          {
            icon : "success",
            title : "Éxito",
            text : "Se agrego correctamente el artículo"
          }
        );
        this.r.navigate(["/articulos"]);
      },
      err => {
        Swal.fire(
          {
            icon : "error",
            title : "Error",
            text : "No se pudo agregar el artículo"
          }
        );
      }
    );
  }

  editar(id:any){
    const fd = new FormData();
    fd.append('titulo', this.article.titulo);
    fd.append('texto', this.article.texto);
    fd.append('imagen', this.archivo);
    fd.append('user_id', this.article.user_id);
    this._as.putArticle(fd, this.article_id).subscribe(
      (resp : any) => {
        Swal.fire(
          {
            icon : "success",
            title : "Éxito",
            text : "Se agrego correctamente el artículo"
          }
        );
        this.r.navigate(["/articulos"]);
      },
      err => {
        Swal.fire(
          {
            icon : "error",
            title : "Error",
            text : "No se pudo agregar el artículo"
          }
        );
      }
    );
  }
}
