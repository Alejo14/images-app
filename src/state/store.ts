import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../features/images/state/imageSlice";

const store = configureStore({
    reducer: {
        images: imageReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;