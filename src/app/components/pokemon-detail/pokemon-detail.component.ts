import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  errorMessage = "";

  constructor(
    private ps: PokemonService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.ps.getById(id!)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = "Impossibile recuperare il Pokemon con id: " + id;
          return of(undefined);
        })
      )
      .subscribe(dati => {
        if (dati) {
          this.pokemon = dati.data;
        }
      });
  }

}
