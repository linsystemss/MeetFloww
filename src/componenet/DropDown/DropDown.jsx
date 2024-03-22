import React, { useState } from 'react';
import './style.css'
import {Link} from "react-router-dom";
const HoverDropdownMenu = ({ options, onSelect , dropName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };



    return (
        <div className="hover-dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="dropdown-button">
                {selectedOption ? selectedOption.label : dropName}
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li key={index}>
                            <Link className='link' to={`/${option.link}`}>{option.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HoverDropdownMenu;
