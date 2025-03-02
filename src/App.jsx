import { useState } from "react";
import "./app.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import PianoPage from "./components/pages/pianopage/pianopage.jsx";
import HomePage from "./components/pages/homepage/homepage.jsx";
import ViewRecordingsList from "./components/pages/ViewRecordingsList/ViewRecordingsList.jsx"
import ViewSongList from "./components/pages/ViewSongList/ViewSongList.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
 
  return (

    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/piano" element={<PianoPage />} />
          <Route path="/recordingslist" element={<ViewRecordingsList />} />
          <Route path="/songlist" element={<ViewSongList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
