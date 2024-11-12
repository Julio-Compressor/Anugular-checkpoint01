import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSearchComponent } from "../video-search/video-search.component";
import { VideoListComponent } from "../video-list/video-list.component";

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [CommonModule, VideoSearchComponent, VideoListComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent {
  currentSearchTerm = '';

  onSearch(term: string) {
    this.currentSearchTerm = term;
  }
}

