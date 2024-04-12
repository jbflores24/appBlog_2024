import { Component, inject } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ArticuloInterface } from '../../../interfaces/articulo.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles : ArticuloInterface[] = [];

  //_as = inject(ArticlesService); // Inyección

  constructor ( private _as : ArticlesService) {
    this._as.getArticles().subscribe(
      (resp:any) => {
        console.log(resp['data']);
        this.articles = resp['data'];
      }
    );
  }
}
