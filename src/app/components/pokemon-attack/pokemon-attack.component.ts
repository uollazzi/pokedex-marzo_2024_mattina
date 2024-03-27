import { Component, Input } from '@angular/core';
import { Attack } from '../../models/pokemon';
import { NotificheService } from '../../services/notifiche.service';

@Component({
  selector: 'app-pokemon-attack',
  templateUrl: './pokemon-attack.component.html',
  styleUrl: './pokemon-attack.component.css'
})
export class PokemonAttackComponent {
  @Input()
  attack?: Attack;

  constructor(private ns: NotificheService) {

  }

  attacca() {
    this.ns.nuovaNotifica(`${this.attack!.name}`);
  }
}
