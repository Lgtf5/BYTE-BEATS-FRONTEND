import { useState } from "react"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"

import Recordings from './components/pages/recordings/recordings.jsx'
import "./app.css"




const App = () => {

  return (
    <div>
    <Header />
    <Recordings/>
    <Footer />
    </div>
  )
}

export default App;
