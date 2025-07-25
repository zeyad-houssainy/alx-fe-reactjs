import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Wrold</h1>
      <RecipeList />
    </>
  )
}

export default App
