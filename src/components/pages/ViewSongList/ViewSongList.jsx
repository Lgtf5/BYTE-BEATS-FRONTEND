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
 
export default function ViewSongList() {
    const [selectedSong, setSelectedSong] = useState(null); 

    return (
        <div className="container_songSelection">

            <div className="icons_songSelection">
                <Home id="home" />
                <Menu id="menu" />
            </div>

            <div>
                <h2 className="songSelection_Tittle">Escoge tu Canción</h2>
            </div>

            <div className="song_list">
                {songs.map((song) => (
                    <Card
                        key={song.id}
                        className={`song_card ${selectedSong === song.id ? "selected" : ""}`}
                        onClick={() => setSelectedSong(song.id)}
                    >
                        <CardContent>
                            <div className="song_card">
                                <span className="song_name">{song.name}</span>
                                <span className="song_difficulty">Dificultad: {song.difficulty}</span>
                                <Play className="song_playIcon"/>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>


            <Button className="button_songSelection"
                disabled={!selectedSong}
                onClick={() => alert(`Has seleccionado: ${songs.find((s) => s.id === selectedSong).name}`)}>

                Quiero esta Canción

            </Button>
        </div>
    );
}




