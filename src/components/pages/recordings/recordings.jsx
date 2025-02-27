

import { useState } from "react";
import { Home, Menu, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";




const songs = [
  { title: "Canción 1", difficulty: "ALTA" },
  { title: "Canción 2", difficulty: "BAJA" },
  { title: "Canción 3", difficulty: "ALTA" },
];

export default function Recordings() {
  const [selectedSong, setSelectedSong] = useState(null);

  


  const getDifficultyColor = (difficulty) =>
    difficulty === "ALTA" ? "text-red-500" : "text-green-500";

  const handleSelect = (index) => setSelectedSong(index);

  const handleConfirm = () => {
    if (selectedSong !== null) {
      alert(`¡Has seleccionado ${songs[selectedSong].title}!`);
    } else {
      alert("Por favor, selecciona una canción primero.");
    }
  };

  return (

    <div id="container-body"
    className="max-w-md mx-auto p-4 space-y-6">
      <div id="navbar" className="flex items-center gap-4 mb-6">
        <Home id="button-home" className="w-6 h-6 text-gray-600" />
        <Menu id="button-menu" className="w-6 h-6 text-gray-600" />
        <h1 id="title" className="text-2xl font-bold text-center">
        Selecciona una canción</h1>
      </div>

      


      <Card id="card-song" className="p-4">
        {songs.map((song, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${
              selectedSong === index ? "bg-gray-100" : ""
            }`}
          >
            <div>
              <h3 className="font-medium">{song.title}</h3>
              <span className={`text-sm font-bold ${getDifficultyColor(song.difficulty)}`}>
                {song.difficulty}
              </span>
            </div>
            <Play id="button-play" className="w-5 h-5 text-green-500" />
          </div>
        ))}
      </Card>

      


      <Button id="button-confirm"
        onClick={handleConfirm}
        className="w-full py-3 text-lg font-medium bg-green-500 hover:bg-green-600"
      >
        Quiero esta Canción
      </Button>
    </div>
  );
}

