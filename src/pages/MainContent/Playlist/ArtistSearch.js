import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './ArtistSearch.css';

const ArtistSearch = ({showResults, artists, }) => {
    return (
        <div id="result-artist" className={showResults ? '' : 'hidden'}>
            <div className="grid-container">
                {artists.map((artist, index) => (
                    <div className="artist-card" key={index}>
                        <div className="card-img">
                            <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                            <div className="play">
                                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="artist-name">{artist.name}</span>
                            <span className="artist-categorie">Artista</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistSearch;
