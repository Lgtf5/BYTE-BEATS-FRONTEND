import { useState } from "react";
import "./app.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import PianoPage from "./components/pages/pianopage/pianopage.jsx";
import HomePage from "./components/pages/homepage/homepage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <icon icon_home = {{fill:'blue'}}/>,
    <icon icon_menu = {{fill:'blue'}}/>,
    <icon play-button ={{fill:'green'}}/>,

    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/piano" element={<PianoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;;
