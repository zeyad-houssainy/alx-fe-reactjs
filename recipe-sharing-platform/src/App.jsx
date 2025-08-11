import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-blue-500'>
      Welcome to recipe 
    </div>
    <HomePage />
    </>
  )
}

export default App
