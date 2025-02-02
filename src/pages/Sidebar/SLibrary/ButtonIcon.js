import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon = ({ btnClass, iconClass, icon, text}) => (
    <button className={btnClass} >
        <FontAwesomeIcon 
            className={iconClass}
            icon={icon}
        >
        </FontAwesomeIcon>
        <span>
            {text}
        </span>
    </button>
);

export default ButtonIcon;