import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { VideoService } from '../services/videos.service';
import { Video } from '../models/video.class';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.scss'
})
export class VideoDetailComponent {  // Suppression de implements OnInit
  video$: Observable<Video | undefined>;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {
    this.video$ = this.route.params.pipe(
      switchMap(params => {
        const id = params['id'];
        return this.videoService.getVideoById$(id);
      })
    );
  }
}