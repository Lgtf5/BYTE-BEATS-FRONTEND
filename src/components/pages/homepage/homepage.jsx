import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"


const HomePage = () => {

    return(
        <div className="home_container">
            <h1 className="home_title">Descubre y toca instrumentos de manera interactiva</h1>
            <div className="home_images">
            <Link to="/piano"><img src="src\assets\MIDI_DosOctavas.jpg" alt="" className="home_image"></img></Link>
                <img src="" alt="" className="home_image"></img>
            </div>
        </div>
    );
};

export default HomePage;