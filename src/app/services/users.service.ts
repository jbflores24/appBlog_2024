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
  constructor(private http: HttpClient) { }

  postUser(user : UserModel){
    return this.http.post('http://localhost:8000/api/user', user, {headers: this.Headers});
  }

  getUsers():Observable<UserInterface[]>{
    return  this.http.get<UserInterface[]>("http://localhost:8000/api/user");
  }
}
