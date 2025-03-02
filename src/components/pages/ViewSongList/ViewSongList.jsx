import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";
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

    const [isButtonSelected, setIsButtonSelected] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const toggleButtonSelection = () => { setIsButtonSelected((prev) => !prev); };




    return (
        <div className="container_songSelection">
            <nav className="nav">
            <div className="icon_container">
            <   div>
                     <Link to="/">
                     <svg className="icon_home" viewBox="0 0 24 24">
                        <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
                     </svg>
                    </Link>
                </div>
                <div className="container-menu">
                    <svg className="icon_menu" onClick={() => setOpenMenu(!openMenu)}
                        viewBox="0 0 24 24">
                        <path d="M4 8H20M4 16H20M4 24H20" />
                    </svg>

                    <div className={`menu_dropDown ${openMenu ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/recordingslist">Grabaciones</Link></li>
                            <li><Link to="/songlist">Canciones</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>

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
                        <icon
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

