import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import "./ViewRecordingsList.css";


const songs = [
    { id: 1, name: "Grabación 1", duracion: "01:02:00" /* difficulty: "BAJA" */ },
    { id: 2, name: "Grabación 2", duracion: "00:58:10" /* difficulty: "ALTA" */ },
    { id: 3, name: "Grabación 3", duracion: "01:32:08" /* difficulty: "MEDIA" */ },
    { id: 4, name: "Grabación 4", duracion: "01:02:00" /* difficulty: "ALTA" */ },
    { id: 5, name: "Grabación 5", duracion: "01:02:00" /* difficulty: "BAJA" */ },
];

export default function ViewRecordingsList() {

    // acción de seleccionar canción
    const [selectedSong, setSelectedSong] = useState(null);

    // acción de seleccionar botón
    const [isButtonSelected, setIsButtonSelected] = useState(false);

    // acción de abrir menú desplegable
    const [openMenu, setOpenMenu] = useState(false);
    const toggleButtonSelection = () => { setIsButtonSelected((prev) => !prev); };





    return (
        <div className="container_songSelection">
            <nav className="nav">
                <div className="icon_container">
                    <div>
                        <svg className="icon_home" onClick={() => window.location.href = '/'}
                            viewBox="0 0 0 0">
                            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
                            {/*  <HomeIcon className="icon_home" />  */}
                        </svg>
                    </div>




                    <div className="container-menu">
                        <svg className="icon_menu" onClick={() => setOpenMenu(!openMenu)}
                            /* <MenuIcon className="icon_menu" */
                            viewBox="0 0 24 24">
                            <path d="M4 8H20M4 16H20M4 24H20" />
                        </svg>

                        <div className={`menu_dropDown ${openMenu ? 'open' : ''}`}>
                            <ul>
                                <li><a href="/pagina1">Inicio</a></li>
                                <li><a href="/pagina2">Grabaciones</a></li>
                                <li><a href="/pagina3">Canciones</a></li>
                            </ul>
                        </div>
                        {/* </button> */}
                    </div>
                </div>
            </nav>

            <div>
                <h2 className="songSelection_Tittle">Escoge tu Grabación</h2>
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
                                <span className="song_duration"> Duración: <strong className="strong">{song.duracion}</strong></span>
                            </div>
                        </CardContent>
                        <icon 
                            className={`song_playIcon ${isButtonSelected ? "selected" : ""}`}
                            onClick={toggleButtonSelection}
                        ></icon>
                        <icon 
                        className={`song_trashIcon ${isButtonSelected ? "selected" : ""}`}
                        onClick={toggleButtonSelection}
                        ></icon>
                    </Card>
                ))}
            </div>

            <button
                className="btn_selectSong"
                disabled={!selectedSong}
                onClick={() => alert(`Has seleccionado: ${songs.find((s) => s.id === selectedSong).name}`)}
            > Quiero esta Grabación
            </button>
        </div>
    )
}



