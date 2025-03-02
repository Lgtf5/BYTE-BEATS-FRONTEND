import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import piano from "../../../assets/homeImages/midi.png";
import tambor from "../../../assets/homeImages/tambor.png";

const HomePage = () => {
    return (
        <div className="home_container">
            <h1 className="home_title">Descubre y toca instrumentos de manera interactiva</h1>
            <div className="home_images">
                <div className="instrument">
                    <Link to="/piano"><img src={piano} alt="Piano" className="home_image" /></Link>
                    <p className="instrument_text">Piano</p>
                </div>
                <div className="instrument">
                    <img src={tambor} alt="Tambor" className="home_image" />
                    <p className="instrument_text">Tambor</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;