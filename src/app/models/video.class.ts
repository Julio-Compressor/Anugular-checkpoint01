export interface Comment {
    author: string;
    content: string;
}

export interface VideoData {
    id: number;
    title: string;
    url: string;
    imgSrc: string;
    channelName: string;
    likes: number;
    comments: Comment[];
    nbViews: string;
    uploadDate: string;
    categories: string[];
}

export class Video implements VideoData {
    public id: number;
    public title: string;
    public url: string;
    public imgSrc: string;
    public channelName: string;
    public likes: number;
    public comments: Comment[];
    public nbViews: string;
    public uploadDate: string;
    public categories: string[];

    constructor(data: VideoData) {
        this.id = data.id;
        this.title = data.title;
        this.url = data.url;
        this.imgSrc = data.imgSrc;
        this.channelName = data.channelName;
        this.likes = data.likes;
        this.comments = data.comments;
        this.nbViews = data.nbViews;
        this.uploadDate = data.uploadDate;
        this.categories = data.categories;
    }
}