import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { SearchProps } from "../types/searchTypes";
import { setSearchQuery } from "../state/searchSlice";

const SearchBar: React.FC<SearchProps> = (props: SearchProps) => {
    const dispatch = useAppDispatch();
    const query = useAppSelector(state => state.search.query);
    const [searchInput, setSearchInput] = useState(query);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    }

    const handleSearch = () => {
        dispatch(setSearchQuery(searchInput));
    }

    return (
        <section>
            <input 
                type="text" 
                name="searchBar"
                id="searchBar" 
                placeholder={props.placeholder}
                value={searchInput}
                aria-label="Image Search Bar"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
        </section>
    )
}

export default SearchBar;