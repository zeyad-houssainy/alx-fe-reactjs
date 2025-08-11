import { useState, useEffect } from "react"
// import axios from "axios"
import recipeData from "../data.json"

function HomePage() {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        setRecipeList(recipeData)
    }, [recipeList])

    return(
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Recipe Collection
                </h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipeList.map(
                        (recipe) => (
                            <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img 
                                        src={recipe.image} 
                                        alt={recipe.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                        {recipe.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {recipe.summary}
                                    </p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage