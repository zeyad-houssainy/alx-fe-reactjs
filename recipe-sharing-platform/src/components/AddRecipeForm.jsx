import { useState } from 'react'

function AddRecipeForm() {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: ''
    })
    
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        
        // Title validation
        if (!formData.title.trim()) {
            newErrors.title = 'Recipe title is required'
        } else if (formData.title.trim().length < 3) {
            newErrors.title = 'Title must be at least 3 characters long'
        }
        
        // Ingredients validation
        if (!formData.ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required'
        } else {
            const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim())
            if (ingredientsList.length < 2) {
                newErrors.ingredients = 'Please include at least 2 ingredients'
            }
        }
        
        // Instructions validation
        if (!formData.instructions.trim()) {
            newErrors.instructions = 'Preparation steps are required'
        } else if (formData.instructions.trim().length < 10) {
            newErrors.instructions = 'Instructions must be more detailed (at least 10 characters)'
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }
        
        setIsSubmitting(true)
        
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            const newRecipe = {
                id: Date.now(),
                title: formData.title.trim(),
                ingredients: formData.ingredients.split('\n').filter(item => item.trim()),
                instructions: formData.instructions.split('\n').filter(item => item.trim()),
                summary: `Delicious ${formData.title.trim()} recipe`,
                image: 'https://source.unsplash.com/random/640x480/?food',
                prepTime: '15 minutes',
                cookTime: '30 minutes',
                servings: 4
            }
            
            console.log('New Recipe Added:', newRecipe)
            alert('Recipe added successfully!')
            
            // Reset form
            setFormData({
                title: '',
                ingredients: '',
                instructions: ''
            })
            
        } catch (error) {
            console.error('Error adding recipe:', error)
            alert('Error adding recipe. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 sm:px-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
                            Add New Recipe
                        </h1>
                        <p className="text-blue-100 text-center mt-2">
                            Share your culinary creation with the world
                        </p>
                    </div>
                    
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                        {/* Recipe Title */}
                        <div className="space-y-2">
                            <label 
                                htmlFor="title" 
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Recipe Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.title 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-blue-500'
                                }`}
                                placeholder="e.g., Grandma's Chocolate Chip Cookies"
                            />
                            {errors.title && (
                                <p className="text-red-600 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-2">
                            <label 
                                htmlFor="ingredients" 
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Ingredients
                            </label>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                value={formData.ingredients}
                                onChange={handleInputChange}
                                rows={6}
                                className={`w-full px-4 py-3 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                                    errors.ingredients 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-blue-500'
                                }`}
                                placeholder="Enter each ingredient on a new line:&#10;2 cups all-purpose flour&#10;1 cup brown sugar&#10;1/2 cup butter&#10;2 large eggs"
                            />
                            {errors.ingredients && (
                                <p className="text-red-600 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.ingredients}
                                </p>
                            )}
                            <p className="text-gray-500 text-sm">
                                💡 Tip: Enter each ingredient on a separate line for better formatting
                            </p>
                        </div>

                        {/* Preparation Steps */}
                        <div className="space-y-2">
                            <label 
                                htmlFor="instructions" 
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Preparation Steps
                            </label>
                            <textarea
                                id="instructions"
                                name="instructions"
                                value={formData.instructions}
                                onChange={handleInputChange}
                                rows={8}
                                className={`w-full px-4 py-3 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                                    errors.instructions 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-blue-500'
                                }`}
                                placeholder="Enter each step on a new line:&#10;Preheat oven to 375°F (190°C)&#10;Mix flour and sugar in a large bowl&#10;Add butter and eggs, mix until combined&#10;Bake for 12-15 minutes until golden brown"
                            />
                            {errors.instructions && (
                                <p className="text-red-600 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.instructions}
                                </p>
                            )}
                            <p className="text-gray-500 text-sm">
                                📝 Tip: Be detailed and clear with each step for best results
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg hover:shadow-xl'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Adding Recipe...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add Recipe
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddRecipeForm