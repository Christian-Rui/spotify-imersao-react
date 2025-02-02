import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import NavLink from "./NavLink";

import "./Navigation.css"

import logoSpotify from "../../../assets/icons/logo-spotify.png";

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