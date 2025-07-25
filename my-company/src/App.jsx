import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Navbar from './components/Navbar.jsx'
import NoPage from './components/NoPage.jsx'
import { createBrowserRouter, BrowserRouter, Route, Routes } from 'react-router-dom'

// const router = createBrowserRouter([
//   {path:'/', element: <Home />},
//   {path:'/Contact', element: <Contact />},
//   {path:'/About', element: <About />},
//   {path:'/Services', element: <Services />},
// ])


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
