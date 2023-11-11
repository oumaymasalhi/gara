import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from 'src/app/config/app-routing.config';

@Component({
  selector: 'gara-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent {
  APP_ROUTING = APP_ROUTING
  itemName="game"
  
  manageItem(itemName:string): void {
    this.itemName = itemName
  }
}
