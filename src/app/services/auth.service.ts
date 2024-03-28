import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser, LoginDTO, RegisterDTO } from '../models/auth';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: LoginDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(`${environment.JSON_SERVER_BASE_URL}/login`, model);
  }

  register(model: RegisterDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(`${environment.JSON_SERVER_BASE_URL}/register`, model);
  }

  setLoggedUser(user: LoggedUser) {
    // localStorage.setItem("user", `${user}`);
    localStorage.setItem("user", JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      return JSON.parse(loggedUser) as LoggedUser;
    }

    return null;
  }
}
