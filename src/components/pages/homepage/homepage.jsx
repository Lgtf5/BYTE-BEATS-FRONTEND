import React from "react";
import "./homepage.css";
import piano from "../../../assets/homeImages/MIDI_DosOctavas.jpg";

const HomePage = () => {
    return (
        <div className="home_container">
            <h1 className="home_title">Descubre y toca instrumentos de manera interactiva</h1>
            <div className="homeImages">
                <div className="instrument">
                    <img src={piano} alt="Piano" className="home_image" />
                    <p className="instrument_text">Piano</p>
                </div>
                <div className="instrument">
                    <img src={piano} alt="Tambor" className="home_image" />
                    <p className="instrument_text">Tambor</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;