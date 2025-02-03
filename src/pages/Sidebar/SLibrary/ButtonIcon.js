import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon = ({ btnClass, iconClass, icon, text, tooltip}) => (
    <button className={btnClass} >
        <FontAwesomeIcon 
            className={iconClass}
            icon={icon}
        >
        </FontAwesomeIcon>
        <span>
            {text}
        </span>
        {tooltip && (
            tooltip
        )}
    </button>
);

export default ButtonIcon;