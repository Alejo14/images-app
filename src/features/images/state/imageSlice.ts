import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Image, ImageListState } from "../types/imageTypes";
import { getImageByQuery, getRandomImage } from "../api/imageService";

const initialState: ImageListState = {
    images: [],
    status: 'idle',
    error: null
}

export const fetchRandom = createAsyncThunk<Image[], string>(
    'images/fetchRandom',
    async ( _, { rejectWithValue }) => {
        try {
            const response = await getRandomImage();
            return response;            
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const fetchByQuery = createAsyncThunk<Image[], string>(
    'images/fetchByQuery',
    async (query, { rejectWithValue }) => {
        try {
            const response = await getImageByQuery(query);
            return response;
        }
        catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRandom.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchRandom.fulfilled, (state, action: PayloadAction<Image[]>) => {
            state.status = 'succeeded';
            state.images = action.payload;
        })
        .addCase(fetchRandom.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
        });

        builder
        .addCase(fetchByQuery.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchByQuery.fulfilled, (state, action: PayloadAction<Image[]>) => {
            state.status = 'succeeded';
            state.images = action.payload;
        })
        .addCase(fetchByQuery.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
        });
    }
});

export default imageSlice.reducer;