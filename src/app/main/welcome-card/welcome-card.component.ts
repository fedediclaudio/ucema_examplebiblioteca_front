import { Component, Input } from '@angular/core';
import { Usuario } from 'src/model/Usuario';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {

  @Input() usuario?: Usuario

}
