import { useState } from "react"
import Header from "./components/header/header.jsx"
import Footer from './components/footer/footer.jsx'
import SongList from "./components/pages/songlist/songlist.jsx"
import "./app.css"




const App = () => {

  return (
    <div>
    <Header />
    <SongList />
    <Footer />
    </div>
  )
}

export default App;
