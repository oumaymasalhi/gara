import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabJeuxRoutingModule } from './tab-jeux-routing.module';
import { TabJeuxComponent } from './tab-jeux/tab-jeux.component';
import { JeuxComponent } from './jeux/jeux.component';
import { SwiperCardComponent } from '../common/swiper-card/swiper-card.component';
import { JeuxCardComponent } from '../common/jeux-card/jeux-card.component';
import { DownloadCardComponent } from '../download-card/download-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    TabJeuxComponent,
    JeuxComponent
  ],
  imports: [
    CommonModule,
    TabJeuxRoutingModule,
    SwiperCardComponent,
    JeuxCardComponent,
    DownloadCardComponent,
    CarouselModule
  ]
})
export class TabJeuxModule { }
