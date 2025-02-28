import React from "react";
import TwoOctavePiano from "../../instruments/midi.jsx";
import RecordingControls from "../../buttons/recording/recording.jsx";
import { usePianoController } from "../../instruments/pianocontroller.jsx";
import "./pianoPage.css";

const PianoPage = () => {
  const { recording, playSound, stopSound, startRecording, stopRecording } = usePianoController();

  return (
    <div className="home_container">
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