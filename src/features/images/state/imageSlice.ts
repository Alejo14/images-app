import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Image, ImagesState } from "../types/imageTypes";

const initialState: ImagesState = {
    images: [],
    status: 'idle',
    error: null
}

export const fetchImagesAsync = createAsyncThunk<Image[], string>(
    'images/fetchImages',
    async (query, { rejectWithValue }) => {
        try {
            if(query) {}
            const response = await [];
            return response;
        } catch (error) {
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
        .addCase(fetchImagesAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchImagesAsync.fulfilled, (state, action: PayloadAction<Image[]>) => {
            state.status = 'succeeded';
            state.images = action.payload;
        })
        .addCase(fetchImagesAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
        });
    }
});

export default imageSlice.reducer;