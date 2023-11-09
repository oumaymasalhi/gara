import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gara-swiper-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.scss']
})
export class SwiperCardComponent {
  @Input({required: true}) image: string;
  @Input({required: true}) avatar: string;
  @Input({required: true}) title: string;
  @Input({required: true}) description: string;
  
  @Input() downloadUrl : string

 



}
