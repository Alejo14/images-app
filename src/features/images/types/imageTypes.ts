export interface Image {
    id: string;
    urls: { thumb: string };
    alt_description: string;
}

export interface ImagesState {
    images: Image[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}