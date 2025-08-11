import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import recipeData from '../data.json'

function RecipeDetail() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Find recipe by ID from the imported data
        const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id))
        setRecipe(foundRecipe)
        setLoading(false)
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading recipe...</p>
                </div>
            </div>
        )
    }

    if (!recipe) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
                    <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist.</p>
                    <Link 
                        to="/" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Recipes
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Recipes
                </Link>

                {/* Recipe Header */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                    <div className="aspect-w-16 aspect-h-9">
                        <img 
                            src={recipe.image} 
                            alt={recipe.title}
                            className="w-full h-64 sm:h-80 object-cover"
                        />
                    </div>
                    <div className="p-6 sm:p-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            {recipe.title}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {recipe.summary}
                        </p>
                        
                        {/* Recipe Meta Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-blue-600">{recipe.prepTime}</div>
                                <div className="text-gray-600">Prep Time</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-green-600">{recipe.cookTime}</div>
                                <div className="text-gray-600">Cook Time</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-purple-600">{recipe.servings}</div>
                                <div className="text-gray-600">Servings</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ingredients and Instructions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Ingredients */}
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Ingredients
                        </h2>
                        <ul className="space-y-3">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700 leading-relaxed">{ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Instructions
                        </h2>
                        <ol className="space-y-4">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                                        {index + 1}
                                    </span>
                                    <p className="text-gray-700 leading-relaxed">{instruction}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail