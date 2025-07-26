  // RecipeList component
  import { useRecipeStore } from '../store/recipeStore';
  import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map((recipe, index) => (
          <div key={recipe.id}>
            {/* MISTAKE: Using assignment inside JSX expression and let variable that changes */}
            {/* Wrong: let count = 0; then {count = count + 1} */}
            {/* Correct: Use map's index parameter or array position */}
            <h3>{index + 1}-{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* <button onClick={}>Show details</button> */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link> {/* Link to details */}
            
          </div>
        ))}
      </div>
    );
  };

export default RecipeList;