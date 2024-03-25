import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private ps: PokemonService) {

  }

  ngOnInit(): void {
    this.ps.search()
      .subscribe(dati => this.pokemons = dati.data);
  }

}
