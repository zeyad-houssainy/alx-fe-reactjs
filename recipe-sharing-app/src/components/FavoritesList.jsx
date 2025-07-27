import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";


function FavoritesList() {
    // Declaring Needed Items From the Store
    const favorites = useRecipeStore(state => state.favorites)

    return (
        favorites.map((recipe, index) => (
            <div key={recipe.id}>
              <h3>{index + 1}-{recipe.title}</h3>
              <p>{recipe.description}</p>
              {/* <button onClick={}>Show details</button> */}
              <Link to={`/recipe/${recipe.id}`}>View Details</Link> {/* Link to details */}
            </div>
          ))
      )
}