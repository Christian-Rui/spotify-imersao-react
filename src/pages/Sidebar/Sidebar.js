import React from 'react';

import Navigation from './SNavigation/Navigation.js';
import Library from './SLibrary/Library.js';

import './Sidebar.css';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Navigation></Navigation>
            <Library></Library>
        </div>
    );
}

export default Sidebar;