export interface Image {
    id: string;
    urls: { small: string };
    description: string | null;
    alt_description: string | null;
    created_at: string;
    user: { name: string; };
};

export interface ImageListState {
    images: Image[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

export interface ImageProps {
    image: Image;
}