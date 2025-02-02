import React from "react"

import "./Playlist.css";

import play1 from "../../../assets/playlist/1.jpeg"
import play2 from "../../../assets/playlist/2.png"
import play3 from "../../../assets/playlist/3.jpeg"
import play4 from "../../../assets/playlist/4.jpeg"
import play5 from "../../../assets/playlist/5.jpeg"
import play6 from "../../../assets/playlist/6.jpeg"
import play7 from "../../../assets/playlist/7.jpeg"
import play8 from "../../../assets/playlist/8.jpeg"
import play9 from "../../../assets/playlist/9.jpeg"
import play10 from "../../../assets/playlist/10.jpeg"
import play11 from "../../../assets/playlist/11.jpeg"
import play12 from "../../../assets/playlist/12.jpeg"

const playlistsOffer = [
    {
        imgSrc: play1,
        text: "Boas Festas"
    },
    {
        imgSrc: play2,
        text: "Feitos para você"
    },
    {
        imgSrc: play3,
        text: "Lançamentos"
    },
    {
        imgSrc: play4,
        text: "Creators"
    },
    {
        imgSrc: play5,
        text: "Podcasts"
    },
    {
        imgSrc: play6,
        text: "Setanejo"
    },
    {
        imgSrc: play7,
        text: "Samba e pagode"
    },
    {
        imgSrc: play8,
        text: "Funk"
    },
    {
        imgSrc: play9,
        text: "Rock"
    },
    {
        imgSrc: play10,
        text: "Hip Hop"
    },
    {
        imgSrc: play11,
        text: "Indie"
    },
    {
        imgSrc: play12,
        text: "Relax"
    },
]

const Playlist = ({ show }) => {
    return (
        <div id="result-playlists" className={show ? "hidden" : ''}>
            <div className="playlist">
                <h1 id="greeting">Boas vindas</h1>
                <h2 className="greeting-subtitle">Navegar por totas as seções</h2>
            </div>

            <div className="offer__scroll-container">
                <div className="offer__list">
                    <section className="offer__list-item">
                        {playlistsOffer.map((offer, index) => (
                            <a key={index} href="" className="cards">
                                <div className={`cards card${index + 1}`}>
                                    <img src={offer.imgSrc} alt="" />
                                    <span>{offer.text}</span>
                                </div>
                            </a>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Playlist;