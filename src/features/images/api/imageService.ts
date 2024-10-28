import api from "../../../api/axiosConfig";
import { Image } from "../types/imageTypes";

export const getRandomImage = async () => {
    const response = await api.get<Image[]>('/photos/random', {
        params: { count: "30" }
    });
    return response.data;
}

export const getImageByQuery = async (query: string) => {
    const response =  await api.get<{ results: Image[] }>('/search/photos', {
        params: { query: query }
    });
    return response.data.results;
}