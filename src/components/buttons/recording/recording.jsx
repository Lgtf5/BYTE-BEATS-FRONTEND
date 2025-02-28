import React from "react";
import "./recording.css";
import { FaMicrophone, FaStop } from "react-icons/fa";

const RecordingControls = ({ recording, startRecording, stopRecording }) => {
  return (
    <div className="recording-controls">
      <button onClick={startRecording} disabled={recording} className="icon-btn">
        <FaMicrophone size={30} className="record-icon" />
      </button>
      <button onClick={stopRecording} disabled={!recording} className="icon-btn">
        <FaStop size={30} className="stop-icon" />
      </button>
    </div>
  );
};

export default RecordingControls;