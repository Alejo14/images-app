import React, { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { SearchProps } from "../types/searchTypes";
import { setSearchQuery } from "../state/searchSlice";
import { fetchByQuery } from "../../images/state/imageSlice";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC<SearchProps> = (props: SearchProps) => {
    const dispatch = useAppDispatch();
    const query = useAppSelector(state => state.search.query);
    const [searchInput, setSearchInput] = useState(query);
    const navigate = useNavigate();

    useEffect(() => {
        setSearchInput(query);
    }, [query]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(searchInput => searchInput = e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    }

    const handleSearch = () => {
        navigate(`/tag/${searchInput}`);
        dispatch(setSearchQuery(searchInput));
        dispatch(fetchByQuery(searchInput));
    }

    return (
        <section className="my-5 flex justify-center align-middle">
            <div className="flex flex-col">
                <label className="text-left" aria-labelledby="searchBar">Search by Tag</label>
                <div  className="flex my-2 justify-between items-center">
                    <input 
                        type="text" 
                        name="searchBar"
                        id="searchBar" 
                        placeholder={props.placeholder}
                        value={searchInput}
                        aria-label="Image Search Bar"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        className="p-2 mr-3 w-72 rounded"
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </section>
    )
}

export default SearchBar;