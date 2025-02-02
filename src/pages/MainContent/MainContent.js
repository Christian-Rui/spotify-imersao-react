import React from 'react';

import Header from './Header/Header/Header';
import Playlist from './Playlist/Playlist';

import './MainContent.css';

const MainContent = () => {
    return(
        <main className="main-container">
            <Header></Header>
            <Playlist></Playlist>
        </main>
    )
}

export default MainContent;