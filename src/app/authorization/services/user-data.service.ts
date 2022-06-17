import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserData } from '../models/user-data.model';
import { PROD_REST_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly USER_POST_URL = `${PROD_REST_URL}/users`

  constructor(private http: HttpClient) { }

  setUserData$(userData: UserData): Observable<User> {
    return this.http.post<User>(this.USER_POST_URL, userData)
  }
}
