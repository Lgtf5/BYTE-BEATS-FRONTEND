import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isButtonSelected, setIsButtonSelected] = useState(false);

    const handleDropdownClick = (e) => { e.stopPropagation(); setIsDropdownOpen((prev) => !prev); };
    const toggleButtonSelection = () => { setIsButtonSelected((prev) => !prev); };


    return (
        <div className="container_songSelection">
            <div className="icon_container">
                <div>
                    <button className="icon_home" ></button>
                    {/* <HomeIcon className="icon_home" /> */}
                </div>
                <div>
                    <button className="icon_menu"
                        /* <MenuIcon className="icon_menu" */
                        onClick={handleDropdownClick}
                        aria-expanded={isDropdownOpen}
                    /*  /> */
                    >
                        {isDropdownOpen && (
                            <div>
                                {/* Dropdown content goes here */}
                            </div>
                        )}</button>
                </div>
            </div>
            <div>
                <h2 className="songSelection_Tittle">Escoge tu Canción</h2>
            </div>
            <div className="song_list">
                {songs.map((song) => (
                    <Card id="list_card" key={song.id}
                        className={`song_card ${selectedSong === song.id ? "selected" : ""}`}
                        onClick={() => setSelectedSong(song.id)}
                    >
                        <CardContent>
                            <div className="song_card">
                                <span className="song_name">{song.name}</span>
                                <span className="song_difficulty"> Dificultad: <strong>{song.difficulty}</strong></span>    
                            </div>
                        </CardContent>
                        <button
                        className={`song_playIcon ${isButtonSelected ? "selected" : ""}`}
                        onClick={toggleButtonSelection}
                        />
                    </Card>
                ))}
            </div>

            <button
                className="btn_selectSong"
                disabled={!selectedSong}
                onClick={() => alert(`Has seleccionado: ${songs.find((s) => s.id === selectedSong).name}`)}
            > Quiero esta Canción
            </button>
        </div>
    )
}

