import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloInterface } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url = 'http://localhost:8000/api/article';
  constructor(private http: HttpClient) { }

  getArticles():Observable<ArticuloInterface[]>{
    return this.http.get<ArticuloInterface[]>(this.url);
  }

  postArticle(formData : FormData){
    return this.http.post(this.url,formData);
  }

  getArticle(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  putArticle (fd: FormData, id: any){
    return this.http.put(`${this.url}/${id}`,fd);
  }
}
