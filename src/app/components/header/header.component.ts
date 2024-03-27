import { Component } from '@angular/core';
import { NotificheService } from '../../services/notifiche.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public ns: NotificheService) { }
}
