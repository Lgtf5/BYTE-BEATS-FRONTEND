import { useState } from "react"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import ViewSongList from "./components/pages/ViewSongList/ViewSongList.jsx"
import "./app.css"
import { HomeIcon } from "lucide-react"




const App = () => {
 
  return (
    <icon icon_home = {{fill:'blue'}}/>,
    <icon icon_menu = {{fill:'blue'}}/>,
    <icon play-button ={{fill:'green'}}/>,

    <div>
    <Header />
    <ViewSongList />
    <Footer />
    </div>
  )
}

export default App;
