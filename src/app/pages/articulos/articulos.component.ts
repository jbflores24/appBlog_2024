import { Component } from '@angular/core';
import { ArticuloInterface } from '../../interfaces/articulo.interface';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})

export class ArticulosComponent {
  articulos : ArticuloInterface[] =  [];
  constructor( private _as : ArticlesService) {
    this._as.getArticles().subscribe(
      (resp : any) => {
        this.articulos = resp['data'];
        console.log(this.articulos);
      }
    );
  }
}
