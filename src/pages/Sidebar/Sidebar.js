import React from "react";

import Navigation from "./Navigation/Navigation.js";

import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Navigation></Navigation>
        </div>
    );
}

export default Sidebar;