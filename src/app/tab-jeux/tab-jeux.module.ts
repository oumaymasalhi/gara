import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabJeuxRoutingModule } from './tab-jeux-routing.module';
import { TabJeuxComponent } from './tab-jeux/tab-jeux.component';


@NgModule({
  declarations: [
    TabJeuxComponent
  ],
  imports: [
    CommonModule,
    TabJeuxRoutingModule
  ]
})
export class TabJeuxModule { }
