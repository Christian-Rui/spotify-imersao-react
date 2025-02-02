import React from "react";

import NavLink from "./NavLink";

import logoSpotify from "../../../assets/icons/logo-spotify.png";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.css"

const Navigation = () => {
    return(
        <nav className="sidebar__navigation">

            <div className="logo">
            <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src={logoSpotify} alt="Logo do Spotify" />
                </a>
            </div>

            <ul>
                <NavLink icon={faHome} text={"Início"}></NavLink>
                <NavLink icon={faSearch} text={"Buscar"}></NavLink>
            </ul>

        </nav>
    );
}

export default Navigation;