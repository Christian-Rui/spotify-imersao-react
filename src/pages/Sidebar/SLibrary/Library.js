import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from './ButtonIcon';

import './Library.css';

const Library = () => {
    return (
        <div className="library">
            <div className="library__content">
                <ButtonIcon
                    btnClass={"library__button tooltip"}
                    iconClass={"faLib"}
                    icon={faBook}
                    text={"Sua Biblioteca"}
                    tooltip={<span className="tooltiptext">Ocultar Sua Biblioteca</span>}
                ></ButtonIcon>
                <button className='tooltip btnPlus'>
                    <FontAwesomeIcon className='plus' icon={faPlus}></FontAwesomeIcon>
                    <span className="tooltiptext">Ocultar Sua Biblioteca</span>
                </button>
            </div>

            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">
                        Crie sua primeira playlist
                    </span>
                    <span className="text subtitle">
                        É fácil, vamos te ajudar
                    </span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
                <a href="about:blank">Cookies</a>
            </div>

            <div className="languages">
                <ButtonIcon
                    btnClass={"languages__button"}
                    icon={faGlobe}
                    text={"Português do Brasil"}
                ></ButtonIcon>
            </div>
        </div>
    )
}

export default Library;