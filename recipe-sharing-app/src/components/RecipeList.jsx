  // RecipeList component
  import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    let count = 0

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{count = count + 1}-{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

export default RecipeList;