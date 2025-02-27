import { useState } from "react";
import "./app.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import PianoPage from "./components/pages/pianopage/pianopage.jsx";

const App = () => {
  
  return (
    <div>
      <Header />
      <PianoPage />
      <Footer />
    </div>
  );
};

export default App;
