import { useState } from "react"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import ViewSongList from "./components/pages/ViewSongList/ViewSongList.jsx"
import "./app.css"




const App = () => {

  return (
    <div>
    <Header />
    <ViewSongList />
    <Footer />
    </div>
  )
}

export default App;
