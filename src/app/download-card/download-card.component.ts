import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gara-download-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.scss']
})
export class DownloadCardComponent {
  @Input() name: string = "Golden Feorges";
  @Input() type: string = "Sport";
  @Input() rate: number = 4.9;
  @Input() image: string = "avatar3.png";
  @Input() downloadUrl: string = "avatar3.png";

}
