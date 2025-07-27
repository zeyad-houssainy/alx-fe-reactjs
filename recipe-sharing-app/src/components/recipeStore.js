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

  // BASIC CRUD FEATURES
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }), 
  deleteRecipe: (recipeId) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),
  updateRecipe: (updatedRecipe) => set(state => ({ 
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ) 
  })),

  // Search and filter functionality
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Favorites 
  favorites: [],
  addFavorite: (recipeId) => set(state => {
    // Only add if not already in favorites
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    // If already in favorites, return current state (no change)
    return state;
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };


