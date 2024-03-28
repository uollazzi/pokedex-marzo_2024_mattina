import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-catturati',
  templateUrl: './pokemon-catturati.component.html',
  styleUrl: './pokemon-catturati.component.css'
})
export class PokemonCatturatiComponent implements OnInit {
  errorMessage = "";

  constructor(private ps: PokemonService) {

  }

  ngOnInit(): void {
    this.ps.getCatturati()
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe(dati => console.log(dati));
  }
}
