import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

// Define el rango del piano: de C4 a B5 (dos octavas)
const firstNote = MidiNumbers.fromNote("c4"); // nota 60
const lastNote = MidiNumbers.fromNote("b5");  // nota 83

// Configuración de atajos de teclado para tocar el piano
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote,
  lastNote,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const TwoOctavePiano = ({ playSound, stopSound }) => {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={playSound}
        stopNote={stopSound}
        width={1000}
        keyboardShortcuts={keyboardShortcuts}
      />
    </div>
  );
};

export default TwoOctavePiano;