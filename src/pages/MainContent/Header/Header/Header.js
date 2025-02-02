import React from "react";

import ArrowButton from "./ArrowButton";

import "./Header.css";

import smallLeft from "../../../../assets/icons/small-left.png"
import smallRight from "../../../../assets/icons/small-right.png"
import search from "../../../../assets/icons/search.png"

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <ArrowButton
                    classDir={"left"}
                    imgSrc={smallLeft}
                    altDir={"Esquerda"}
                ></ArrowButton>
                <ArrowButton
                    classDir={"right"}
                    imgSrc={smallRight}
                    altDir={"Direita"}
                ></ArrowButton>
            </div>
            <div className="header__search">
                <img src={search}  alt="" />
                <input id="search-input" type="text" maxlength="800" placeholder="O que você ouvir?" />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>

        </nav>
    );
}

export default Header;