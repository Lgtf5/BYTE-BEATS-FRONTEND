import React from "react";

const RecordingControls = ({
  recording,
  recordingData,
  startRecording,
  stopRecording,
  sendRecording,
}) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <button onClick={startRecording} disabled={recording}>
        Iniciar Grabación
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Detener Grabación
      </button>
      <button onClick={sendRecording} disabled={!recordingData}>
        Enviar Grabación
      </button>
    </div>
  );
};

export default RecordingControls;