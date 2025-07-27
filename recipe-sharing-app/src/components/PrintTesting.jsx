import {useRecipeStore} from "./recipeStore"

function PrintTesting() {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
    const favorites = useRecipeStore(state => state.favorites);

    function print(list) {
        if (list && list.length > 0) {
            for (const i of list) {
                console.log(i)
            }
        } else {
            console.log("List is Empty")
        }
    }

    return(
        <div className="print-testing-row">
            <button onClick={() => print(recipes)}>Print all recipes</button>
            <button onClick={() => print(filteredRecipes)}>Print all filtered Recipes</button>
            <button onClick={() => print(favorites)}>Print all favorites</button>
        </div>
    )
}

export default PrintTesting;