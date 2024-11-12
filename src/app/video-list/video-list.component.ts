import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VideoService } from '../services/videos.service';
import { VideoCardComponent } from "../video-card/video-card.component";
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Video } from '../models/video.class';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [VideoCardComponent, AsyncPipe],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnChanges {
  @Input() searchTerm = '';
  videos$: Observable<Video[]>;

  constructor(private videoService: VideoService) {
    this.videos$ = this.videoService.getVideoList$();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('VideoList - searchTerm changed:', this.searchTerm);
    if (changes['searchTerm']) {
      this.videos$ = this.videoService.filteredVideoList$(this.searchTerm);
    }
  }
}
