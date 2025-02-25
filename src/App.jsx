import { useState } from 'react'
import Header from "./components/header/header.jsx"
import Footer from './components/footer/footer.jsx'
import HomePage from './components/pages/homepage/homepage.jsx'
import "./app.css"




const App = () => {

  return (
    <div>
    <Header />
    <HomePage />
    <Footer />
    </div>
  )
}

export default App
