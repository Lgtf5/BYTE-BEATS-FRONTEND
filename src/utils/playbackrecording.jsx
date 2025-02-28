import React, { useEffect, useRef } from "react";
import soundMap from "../../../utils/soundmap.jsx";
import { Howl, Howler } from "howler";

const PlaybackRecording = ({ recordingData }) => {
  const soundsRef = useRef({});

  useEffect(() => {
    // Cargar los sonidos desde el soundMap
    const sounds = {};
    for (const [midi, filePath] of Object.entries(soundMap)) {
      sounds[midi] = new Howl({
        src: [filePath],
        volume: 1.0,
        preload: true,
      });
    }
    soundsRef.current = sounds;
    // Reanudar el contexto de audio si está suspendido
    if (Howler.ctx && Howler.ctx.state === "suspended") {
      Howler.ctx.resume();
    }
  }, []);

  const playRecording = () => {
    if (!recordingData || !recordingData.notes?.length) {
      console.error("No hay datos de grabación para reproducir.");
      return;
    }
    // Convertir el timestamp de inicio a epoch (ms)
    const recordingStartEpoch = new Date(recordingData.timestamp).getTime();

    recordingData.notes.forEach((note) => {
      // Calcular el retardo relativo para iniciar la nota
      const noteStartOffset = note.startTime - recordingStartEpoch;
      setTimeout(() => {
        const sound = soundsRef.current[note.midi];
        if (sound) {
          sound.play();
        }
      }, noteStartOffset);

      // Programar la detención de la nota según su duración
      setTimeout(() => {
        const sound = soundsRef.current[note.midi];
        if (sound) {
          sound.stop();
        }
      }, noteStartOffset + note.duration);
    });
  };

  return (
    <div>
      <button onClick={playRecording}>Reproducir Grabación</button>
    </div>
  );
};

export default PlaybackRecording;