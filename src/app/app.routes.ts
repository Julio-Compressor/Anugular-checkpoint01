import { Routes } from '@angular/router';
import { VideoPageComponent } from './video-page/video-page.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

export const routes: Routes = [
    { path: 'videos', component: VideoPageComponent },
    { path: '', redirectTo: 'videos', pathMatch: 'full' },
    { path: 'video/:id', component: VideoDetailComponent }
];
