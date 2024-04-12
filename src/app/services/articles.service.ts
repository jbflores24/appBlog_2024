import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloInterface } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles():Observable<ArticuloInterface[]>{
    return this.http.get<ArticuloInterface[]>('http://localhost:8000/api/article');
  }
}
