import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gara-swiper-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.scss']
})
export class SwiperCardComponent implements OnInit {
  backgroundImageUrl: string //= './../../../assets/images/bakoBg.png';

  @Input({required: true})  image: string 
  @Input({required: true}) avatar: string;
  @Input({required: true}) title: string;
  @Input({required: true}) description: string;
  
  @Input() downloadUrl : string
  backgroundImage: string

  constructor(private cdr: ChangeDetectorRef){
  }

  ngOnInit(): void {
    this.backgroundImageUrl= `linear-gradient(180deg, #1c1d2e03 0%, rgba(28, 29, 46, 0.78) 28.65%, #1C1D2E 68.75%),
    url('./../../../assets/images/${this.image}')`
      
  }



}
