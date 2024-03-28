import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardResponse, PokemonCatturato, SearchCardsResponse } from '../models/pokemon';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient, private as: AuthService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.POKEMON_SERVER_API_KEY
    })
  }

  search(pageSize: number = 20): Observable<SearchCardsResponse> {
    return this.http.get<SearchCardsResponse>(
      `${environment.POKEMON_SERVER_BASE_URL}/cards?pageSize=${pageSize}`,
      this.httpOptions
    );
  }

  getById(id: string): Observable<CardResponse> {
    return this.http.get<CardResponse>(
      `${environment.POKEMON_SERVER_BASE_URL}/cards/${id}`,
      this.httpOptions
    )
  }

  getCatturati(): Observable<PokemonCatturato[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.as.getLoggedUser()?.accessToken
      })
    };

    // GET http://localhost:3000/cattutati?userId=1
    return this.http.get<PokemonCatturato[]>(
      `${environment.JSON_SERVER_BASE_URL}/catturati?userId=` + this.as.getLoggedUser()?.user.id,
      httpOptions
    );
  }
}
