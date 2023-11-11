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
  @Input({required:true}) name: string 
  @Input({required:true}) type: string 
  @Input({required:true}) rate: number 
  @Input({required:true}) image: string 
}
