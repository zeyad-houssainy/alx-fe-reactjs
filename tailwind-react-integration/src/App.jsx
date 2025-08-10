import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="
      md:w-1/2 lg:w-1/3 text-white bg-gray-700 font-semibold p-4
      m-2
      rounded-2xl
      shadow
      "
      
      >
        Hello world!
      </h1>
      <UserProfile />
    </>
  )
}

export default App
