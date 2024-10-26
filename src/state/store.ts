import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../features/images/state/imageSlice";
import searchReducer from "../features/search/state/searchSlice";

const store = configureStore({
    reducer: {
        images: imageReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;