import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { Video, VideoData } from "../models/video.class";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    private apiUrl = '/jsons/data.json';

    constructor(private http: HttpClient) { }

    getVideoList$(): Observable<Video[]> {
        return this.http.get<{ videos: VideoData[] }>(this.apiUrl).pipe(
            map(response => response.videos.map(data => new Video(data))),
        );
    }

    getVideoById$(id: string): Observable<Video | undefined> {
        return this.http.get<{ videos: VideoData[] }>(this.apiUrl).pipe(
            map(response => response.videos),
            map(videos => videos.find(video => video.id.toString() === id)),
            map(videoData => videoData ? new Video(videoData) : undefined)
        );
    }

    filteredVideoList$(searchTerm: string): Observable<Video[]> {
        return this.http.get<{ videos: VideoData[] }>(this.apiUrl).pipe(
            map(response => response.videos),
            map(videos => {
                if (!searchTerm.trim()) {
                    return videos;
                }
                const normalizedSearchTerm = searchTerm.toLowerCase().trim();
                return videos.filter(video =>
                    video.title.toLowerCase().includes(normalizedSearchTerm) ||
                    video.channelName.toLowerCase().includes(normalizedSearchTerm) ||
                    video.categories.some(category =>
                        category.toLowerCase().includes(normalizedSearchTerm)
                    )
                );
            }),
            map(videos => videos.map(data => new Video(data)))
        );
    }
}