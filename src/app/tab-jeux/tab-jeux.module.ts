import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {TabsModule} from 'ngx-bootstrap/tabs'
 import {CarouselModule} from 'ngx-bootstrap/carousel'
import { TabJeuxRoutingModule } from './tab-jeux-routing.module';
import { TabJeuxComponent } from './tab-jeux/tab-jeux.component';
import { JeuxComponent } from './jeux/jeux.component';
import { SwiperCardComponent } from '../common/swiper-card/swiper-card.component';


@NgModule({
  declarations: [
    TabJeuxComponent,
    JeuxComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    TabJeuxRoutingModule,
    CarouselModule.forRoot(),
    SwiperCardComponent
  ]
})
export class TabJeuxModule { }
