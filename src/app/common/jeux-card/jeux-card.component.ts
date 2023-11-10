import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gara-jeux-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jeux-card.component.html',
  styleUrls: ['./jeux-card.component.scss']
})
export class JeuxCardComponent {
  @Input() name: string = "Golden Feorges";
  @Input() type: string = "Sport";
  @Input() rate: number = 4.9;
  @Input() image: string = "avatar3.png";
}
