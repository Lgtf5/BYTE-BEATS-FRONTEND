import { useState, useEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import soundMap from "../../utils/soundmap.jsx";
import { postRecording } from "../../services/recordingservices.js";

export const usePianoController = () => {
  const [recording, setRecording] = useState(false);
  const recordingStartTimeRef = useRef(null);
  const recordedEventsRef = useRef([]);
  const activeNotesRef = useRef({});
  const soundsRef = useRef({});

  useEffect(() => {
    if (Howler.ctx && Howler.ctx.state === "suspended") {
      Howler.ctx.resume();
    }
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
    const now = Date.now();

    if (recording) {
      const noteEvent = {
        midi: midiNumber,
        startTime: now,
        stopTime: null,
        duration: null,
      };
      activeNotesRef.current[midiNumber] = noteEvent;
      recordedEventsRef.current.push(noteEvent);
    }
    const sound = soundsRef.current[midiNumber];
    if (sound) {
      sound.play();
    } else {
      console.error(`No se encontró sonido para la nota MIDI: ${midiNumber}`);
    }
  };

  const stopSound = (midiNumber) => {
    if (recording) {
      const now = Date.now();
      const noteEvent = activeNotesRef.current[midiNumber];
      if (noteEvent) {
        noteEvent.stopTime = now;
        noteEvent.duration = now - noteEvent.startTime;
        delete activeNotesRef.current[midiNumber];
      }
    }
    const sound = soundsRef.current[midiNumber];
    if (sound) {
      sound.stop();
    }
  };

  const startRecording = () => {
    setRecording(true);
    recordingStartTimeRef.current = Date.now();
    recordedEventsRef.current = [];
    activeNotesRef.current = {};
  };

  const stopRecording = async () => {
    setRecording(false);
    const recordingEndTime = Date.now();
    const recordingDuration = recordingEndTime - recordingStartTimeRef.current;

    const recordingData = {
      recordingId: generateUUID(),
      timestamp: new Date(recordingStartTimeRef.current).toISOString(),
      duration: recordingDuration,
      instrument: "piano",
      notes: recordedEventsRef.current,
    };

    console.log("Recording data:", recordingData);

    try {
      const result = await postRecording(recordingData);
      console.log("Grabación enviada con éxito", result);
    } catch (error) {
      console.error("Error al enviar la grabación", error);
    }
  };

  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  return {
    recording,
    playSound,
    stopSound,
    startRecording,
    stopRecording,
  };
};