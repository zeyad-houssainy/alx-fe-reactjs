  // RecipeList component
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes)

    // Adding Favorite option to the list
    const favorites = useRecipeStore(state => state.favorites);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    function handleRecipeList(recipesList) {
      return (
        recipesList.map((recipe, index) => (
            <div key={recipe.id}>
              <h3>{index + 1}-{recipe.title}</h3>
              <p>{recipe.description}</p>
              {/* <button onClick={}>Show details</button> */}
              <Link to={`/recipe/${recipe.id}`}>View Details</Link> {/* Link to details */}
              <button 
                style={{backgroundColor:"green"}} 
                onClick={addFavorite}>
                  Add to Favorite
              </button>
              
            </div>
          )
        )

      )
    }

    return (
      <div>
        <SearchBar />
        {
          filteredRecipes.length == 0 ? handleRecipeList(recipes) :
          handleRecipeList(filteredRecipes)
          }

        
      </div>
    );
  };

export default RecipeList;


