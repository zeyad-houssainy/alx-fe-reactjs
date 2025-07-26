import { useRecipeStore } from "../store/recipeStore"
import { useNavigate } from "react-router-dom"

// MISTAKE: Calling hook outside of component body
// Wrong: const deleteRecipe = useRecipeStore(state => state.deleteRecipe) - at top level
// Correct: Move hook call inside the component function

function DeleteRecipeButton({ recipeId }) {
    // Correct: Hook called inside component body
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();
    
    function handleDeleteRecipe() {
        deleteRecipe(recipeId);
        // Navigate to home page after deleting
        navigate('/');
    }

    return (
        <button 
            onClick={handleDeleteRecipe}
            style={{backgroundColor: "red"}}>
            Delete Recipe
        </button>
    );
}

export default DeleteRecipeButton;