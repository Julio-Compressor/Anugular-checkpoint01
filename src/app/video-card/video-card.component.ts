import { Component, Input } from '@angular/core';
import { Video } from '../models/video.class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input({ required: true }) video!: Video;
}
