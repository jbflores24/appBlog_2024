import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Headers = new HttpHeaders().set('Content-Type', 'application/json');
  url  = 'http://localhost:8000/api/user';
  constructor(private http: HttpClient) { }

  postUser(user : UserModel){
    return this.http.post( this.url, user, {headers: this.Headers});
  }

  getUsers():Observable<UserInterface[]>{
    return  this.http.get<UserInterface[]>(this.url);
  }

  getUser(id:any): Observable<UserInterface>{
    return this.http.get<UserInterface>(`${this.url}/${id}`,{ headers: this.Headers });
  }

  putUser(user : UserModel) : Observable<UserModel>{
    return this.http.put<UserModel>(`${this.url}/${user.id}`,user,{headers:this.Headers});
  }

  deleteUser (id : any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
