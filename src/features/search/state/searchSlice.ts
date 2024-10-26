import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchQuery } from "../types/searchTypes";

const initialState: SearchQuery = {
    query: ''
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        }
    }
});

export default searchSlice;