import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Play, Home, Menu } from "lucide-react";
import "./songsviews.css";


const songs = [
    { id: 1, name: "Canción 1", difficulty: "BAJA" },
    { id: 2, name: "Canción 2", difficulty: "ALTA" },
    { id: 3, name: "Canción 3", difficulty: "MEDIA" },
    { id: 4, name: "Canción 4", difficulty: "ALTA" },
    { id: 5, name: "Canción 5", difficulty: "BAJA" },
];
 
export default function SongList() {
    const [selectedSong, setSelectedSong] = useState(null); 

    return (
        <div className="container_songSelection">

            <div className="icons_songSelection">
                <Home className="w-12 h-12 cursor-pointer"/>
                <Menu className="w-12 h-12 cursor-pointer"/>
            </div>

            <div>
                <h2 className="songSelection_Tittle">Escoge tu Canción</h2>
            </div>

            <div className="song-list">
                {songs.map((song) => (
                    <Card
                        key={song.id}
                        className={`song-card ${selectedSong === song.id ? "selected" : ""}`}
                        onClick={() => setSelectedSong(song.id)}
                    >
                        <CardContent className="song-content">
                            <div className="song-right">
                                <span className="song-name">{song.name}</span>
                                <span className="song-difficulty">Dificultad: {song.difficulty}</span>
                                <Play className="song-play-icon"/>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>


            <Button
                className="select-song-button"
                disabled={!selectedSong}
                onClick={() => alert(`Has seleccionado: ${songs.find((s) => s.id === selectedSong).name}`)}>

                Quiero esta Canción

            </Button>
        </div>
    );
}




