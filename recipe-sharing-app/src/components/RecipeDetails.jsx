  // RecipeDetails component
  import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import { useState } from 'react';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    // Add state to control edit form visibility
    const [showEditForm, setShowEditForm] = useState(false);

    // Add function to toggle edit form
    function handleEditRecipe() {
      setShowEditForm(!showEditForm);
    }
    
    if (!recipe) {
      return(
        <>
          <div>Recipe not found</div>
          <Link to={'/'}>Go Home</Link>
        </>
    );
    }

    return (
      <div>
        <Link to={'/'}>Go Home</Link>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        
        {/* Show edit form conditionally */}
        {showEditForm && (
          <EditRecipeForm 
            recipe={recipe} 
            onUpdateComplete={() => setShowEditForm(false)} 
          />
        )}
        
        <button onClick={handleEditRecipe}>
          {showEditForm ? 'Cancel Edit' : 'Edit Recipe'}
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    );
  };

export default RecipeDetails;