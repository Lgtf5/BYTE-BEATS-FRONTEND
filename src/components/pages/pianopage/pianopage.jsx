import React, { useState } from "react";
import { Link } from "react-router-dom";
import TwoOctavePiano from "../../instruments/midi.jsx";
import RecordingControls from "../../buttons/recording/recording.jsx";
import { usePianoController } from "../../instruments/pianocontroller.jsx";
import "./pianoPage.css";

const PianoPage = () => {
  const { recording, playSound, stopSound, startRecording, stopRecording } =
    usePianoController();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="home_container">
      <nav className="nav">
        <div className="icon_container">
          <div>
            <Link to="/">
              <svg className="icon_home" viewBox="0 0 24 24">
                <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
              </svg>
            </Link>
          </div>
          <div className="container-menu">
            <svg
              className="icon_menu"
              onClick={() => setOpenMenu(!openMenu)}
              viewBox="0 0 24 24"
            >
              <path d="M4 8H20M4 16H20M4 24H20" />
            </svg>
            <div className={`menu_dropDown ${openMenu ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/recordingslist">Grabaciones</Link>
                </li>
                <li>
                  <Link to="/songlist">Canciones</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <h1 className="home_title">Piano</h1>
      <div className="piano_wrapper">
        <div className="recording_controls">
          <RecordingControls
            recording={recording}
            startRecording={startRecording}
            stopRecording={stopRecording}
          />
        </div>
        <div className="piano_container">
          <TwoOctavePiano playSound={playSound} stopSound={stopSound} />
        </div>
      </div>
    </div>
  );
};

export default PianoPage;
