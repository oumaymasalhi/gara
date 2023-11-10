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
  @Input({required: true}) title: string;
  @Input({required: true}) type: string;
  @Input({required: true}) rate: number;
  @Input({required: true}) image: string;
  @Input() downloadUrl: string;

}
