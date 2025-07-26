


import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

function EditRecipeForm({ recipe, onUpdateComplete }) {
    console.log("EditRecipeForm was clicked")
    
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);


    // Handle Submit
    function handleSubmit(event) {
        event.preventDefault();
        
        // Update the recipe with the same ID but new title/description
        updateRecipe({
            id: recipe.id,
            title,
            description
        });
        
        // Hide the form after successful update by calling parent's callback
        if (onUpdateComplete) {
            onUpdateComplete(); // This will hide the form
        }
        
        // Optional: You could add navigation back to details or show success message
        // alert('Recipe updated successfully!');
    }

    return (
        <>
            {/* <h3>Edit Recipe</h3> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <button type="submit">Update Recipe</button>
            </form>
        </>
    )
}

export default EditRecipeForm;