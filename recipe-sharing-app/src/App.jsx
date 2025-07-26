import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

// Wrapper component to extract recipe ID from URL params
function RecipeDetailsPage() {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <h1>Recipe Sharing App</h1>
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <RecipeList />
              <AddRecipeForm />
            </>
            }/>
            <Route path="/recipe/:id" element={
              <RecipeDetailsPage />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
