
// 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'

// CSS
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
