import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login'

  constructor(private http: HttpClient) { }


getUser() : Observable<User[]> {
  return this.http.get<User[]>(this.dbUrl);
}
login() : Observable<User[]> {
  return this.http.post<User[]>(this.dbUrl);
}

}




