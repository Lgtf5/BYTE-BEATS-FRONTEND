
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import "./app.css"
import ViewRecordingsList from "./components/pages/ViewRecordingsList/ViewRecordingsList.jsx"




const App = () => {
 
  return (
/*     <icon icon_home = {{fill:'blue'}}/>,
    <icon icon_menu = {{fill:'blue'}}/>,
    <icon play-button ={{fill:'green'}}/>,
 */
    <div>
    <Header />
    <ViewRecordingsList/>
    <Footer />
    </div>
  )
}

export default App;
