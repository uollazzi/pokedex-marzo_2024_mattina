import { Component } from '@angular/core';
import { NotificheService } from '../../services/notifiche.service';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrl: './notifiche.component.css'
})
export class NotificheComponent {
  constructor(public ns: NotificheService) {

  }
}
