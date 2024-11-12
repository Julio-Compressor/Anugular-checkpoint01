import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './video-search.component.html',
  styleUrl: './video-search.component.scss'
})
export class VideoSearchComponent {
  searchTerm = '';
  @Output() search = new EventEmitter<string>();

  onSearch(term: string) {
    this.search.emit(term);
  }
}