import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

function SearchBar() {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
    const filterRecipes = useRecipeStore(state => state.filterRecipes)
    const recipes = useRecipeStore(state => state.recipes)


    return(
        <input 
            type="text" 
            placeholder="Search Filter"
            style={{
                width: "80%", 
                height: "30px"
            }}
            onChange={
                (e) => {
                    setSearchTerm(e.target.value);
                    filterRecipes(recipes);
                }
            }
        />
    )
}


export default SearchBar;