import React from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks";

const SearchBar: React.FC<string> = (placeholder: string) => {
    const dispatch = useAppDispatch();
    const query = useAppSelector((state) => state);

    return (
        <>
            <input 
                type="text" 
                name="searchBar"
                id="searchBar" 
                placeholder={placeholder}
            />
        </>
    )
}

export default SearchBar;