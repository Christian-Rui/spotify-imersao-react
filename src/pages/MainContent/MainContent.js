import React, { useState } from 'react';
import axios from 'axios';

import ArrowButton from "./ArrowButton";
import Playlist from './Playlist/Playlist';
import ArtistSearch from './Playlist/ArtistSearch';

import './MainContent.css';

import smallLeft from "../../assets/icons/small-left.png";
import smallRight from "../../assets/icons/small-right.png";
import search from "../../assets/icons/search.png";

import artistsData from '../../api-artists/artists.json';

const MainContent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [artists, setArtists] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const requestApi = async (term) => {
        const url = `http://localhost:3001/artists?name_like=${term}`;
        try {
            const response = await axios.get(url);
            displayResults(response.data, term);
        } catch (error) {
            
            console.error('Erro ao buscar artistas, usando dados locais');
            // Se a API falhar, use os dados do JSON local
            displayResults(artistsData, term);
        }
    };

    const displayResults = (result, term) => {
        
        let artistsArray;

        // Verifica se result é um array
        if (Array.isArray(result)) {
            artistsArray = result;
        } else if (result.artists && Array.isArray(result.artists)) {
            artistsArray = result.artists;
        } else {
            console.error('A resposta não contém dados válidos:', result);
            artistsArray = [];
        }

        const filteredArtists = artistsArray.filter(artist =>
            artist.name.toLowerCase().includes(term)
        );

        setArtists(filteredArtists);
        setShowResults(filteredArtists.length > 0);
    };

    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        if (value === "") {
            setShowResults(false);
            setArtists([]);
            return;
        }

        requestApi(value);
    };

    return (
        <main className="main-container">
            <nav className="header__navigation">
                <div className="navigation">
                    <ArrowButton
                        classDir={"left"}
                        imgSrc={smallLeft}
                        altDir={"Esquerda"}
                    />
                    <ArrowButton
                        classDir={"right"}
                        imgSrc={smallRight}
                        altDir={"Direita"}
                    />
                </div>
                <div className="header__search">
                    <img src={search} alt="" />
                    <input
                        id="search-input"
                        type="text"
                        maxLength="800"
                        placeholder="O que você ouvir?"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>

            <div className="playlist-container">
                <Playlist show={showResults} />
                <ArtistSearch
                    showResults={showResults}
                    artists={artists}
                />
            </div>
        </main>
    );
}

export default MainContent;