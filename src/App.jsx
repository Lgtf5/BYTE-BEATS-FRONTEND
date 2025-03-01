import { useState } from "react"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"

import Recordings from './components/pages/recordings/recordings.jsx'
import "./app.css"
import { HomeIcon } from "lucide-react"




const App = () => {
 
  return (
    <icon icon_home = {{fill:'blue'}}/>,
    <icon icon_menu = {{fill:'blue'}}/>,
    <icon play-button ={{fill:'green'}}/>,

    <div>
    <Header />
    <Recordings/>
    <Footer />
    </div>
  )
}

export default App;
