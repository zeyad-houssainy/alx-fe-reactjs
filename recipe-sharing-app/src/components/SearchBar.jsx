import React from 'react';
import { useRecipeStore } from './recipeStore';

function SearchBar() {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
    const filterRecipes = useRecipeStore(state => state.filterRecipes)

    return(
        <input 
            type="text" 
            placeholder="Search recipes..."
            style={{
                width: "80%", 
                height: "30px"
            }}
            onChange={
                (e) => {
                    setSearchTerm(e.target.value);
                    filterRecipes();
                }
            }
        />
    )
}


export default SearchBar;