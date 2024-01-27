import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stories-carousel',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in imports
  templateUrl: './stories-carousel.component.html',
  styleUrl: './stories-carousel.component.css'
})
export class StoriesCarouselComponent {
  videos = [
    'https://www.example.com/video1.mp4',
    'https://www.example.com/video2.mp4',
    'https://www.example.com/video3.mp4'
  ];
}
