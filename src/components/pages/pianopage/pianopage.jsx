import React, { useState, useEffect, useRef } from "react";
import TwoOctavePiano from "../../instruments/midi.jsx"
import soundMap from "../../../utils/soundmap.jsx";
import { Howl, Howler } from "howler";

const PianoPage = () => {
    const [audioEnabled, setAudioEnabled] = useState(false);
    const soundsRef = useRef({});
  
    useEffect(() => {
      const sounds = {};
      for (const [midi, filePath] of Object.entries(soundMap)) {
        sounds[midi] = new Howl({
          src: [filePath],
          volume: 1.0,
          preload: true,
        });
      }
      soundsRef.current = sounds;
    }, []);
  
    const playSound = (midiNumber) => {
      if (!audioEnabled) return;
      const sound = soundsRef.current[midiNumber];
      if (sound) {
        const soundId = sound.play();
        console.log(`Reproduciendo nota ${midiNumber} con id ${soundId}`);
      } else {
        console.error(`No se encontró sonido para la nota MIDI: ${midiNumber}`);
      }
    };
  
    const stopSound = (midiNumber) => {
      const sound = soundsRef.current[midiNumber];
      if (sound) {
        sound.stop();
      }
    };
  
    const handleActivateAudio = () => {
      setAudioEnabled(true);
      if (Howler.ctx && Howler.ctx.state === "suspended") {
        Howler.ctx.resume();
      }
    };
  
    return (
      <div>
        {!audioEnabled && (
          <button onClick={handleActivateAudio}>Activar Sonido</button>
        )}
        <TwoOctavePiano playSound={playSound} stopSound={stopSound} />
      </div>
    );
  };
  
  export default PianoPage;