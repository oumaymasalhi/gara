import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTING } from 'src/app/config/app-routing.config';

@Component({
  selector: 'gara-tab-jeux',
  templateUrl: './tab-jeux.component.html',
  styleUrls: ['./tab-jeux.component.scss']
})
export class TabJeuxComponent {
  active: string = "jeux"

  constructor(private router :Router){
    this.router.navigate([APP_ROUTING.JEUX])
  }

  showJeux(): void {
    this.active="jeux"
    this.router.navigate([APP_ROUTING.JEUX])
  }
  
  showPlayNow(): void {
    this.active="playNow"
    this.router.navigate([APP_ROUTING.TAB_JEUX])

  }
}
