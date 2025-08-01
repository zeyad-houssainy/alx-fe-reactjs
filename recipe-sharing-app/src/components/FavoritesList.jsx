import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

function FavoritesList() {
    // Get favorites (array of recipe IDs) and all recipes
    const favorites = useRecipeStore(state => state.favorites);
    const recipes = useRecipeStore(state => state.recipes);
    
    // Get the actual recipe objects for favorited IDs
    const favoriteRecipes = favorites.map(favoriteId => 
        recipes.find(recipe => recipe.id === favoriteId)
    ).filter(Boolean); // Remove any undefined values

    return (
        <div>
            <Link to={"/"}>Go Home</Link>
            <h2>My Favorite Recipes</h2>
            
            {favoriteRecipes.length === 0 ? (
                <p>No favorite recipes yet!</p>
            ) : (
                favoriteRecipes.map((recipe, index) => (
                    <div key={recipe.id}>
                        <h3>{index + 1}-{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <Link to={`/recipe/${recipe.id}`}>View Details</Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default FavoritesList;