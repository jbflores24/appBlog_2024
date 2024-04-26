import { Component } from '@angular/core';
import { ArticuloInterface } from '../../interfaces/articulo.interface';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})

export class ArticulosComponent {
  articulos : ArticuloInterface[] =  [];
  constructor( private _as : ArticlesService,
              private r : Router
  ) {
    this._as.getArticles().subscribe(
      (resp : any) => {
        this.articulos = resp['data'];
        console.log(this.articulos);
      }
    );
  }

  agregar(){
    console.log("diste click, agregar");
    this.r.navigate(['/gestionArticulo',0]);
  }

  editar(id:any){
    this.r.navigate(['/gestionArticulo',id]);
  }
}
