import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [
    // Mock recipes for testing
    {
      id: 1,
      title: "Classic Spaghetti Carbonara",
      description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and black pepper. Simple yet delicious!"
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      description: "Soft and chewy homemade cookies with chocolate chips. Perfect for dessert or a sweet snack with milk."
    },
    {
      id: 3,
      title: "Grilled Chicken Salad",
      description: "Fresh mixed greens topped with grilled chicken breast, cherry tomatoes, cucumbers, and balsamic vinaigrette."
    }
  ],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }), 
  deleteRecipe: (recipeId) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),
  updateRecipe: (updatedRecipe) => set(state => ({ 
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ) 
  }))

}));

export { useRecipeStore };
