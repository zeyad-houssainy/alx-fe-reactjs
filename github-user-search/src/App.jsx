import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import apiData from './services/githubAPI'


function App() {

  useEffect(() => {
    // Test API call with a public endpoint
    const resulting = apiData.get('/users')
      .then(response => {
        console.log('GitHub API Response:', response.data)
      })
      .catch(error => {
        console.error('GitHub API Error:', error)
      })
  }, [])

  return (
    <BrowserRouter>
        <h1>Hello world</h1>
        <Routes>
          {/* <Route path='' element={}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
