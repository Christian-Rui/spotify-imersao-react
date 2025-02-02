import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLink = ({ icon, text, href }) => (
    <li>
        <a href="#" onClick={(e) => e.preventDefault()}>
            <FontAwesomeIcon
                className="faNav"
                icon={icon} 
             />
            <span>{text}</span>
        </a>
    </li>
);

export default NavLink;