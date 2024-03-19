import style from './style.module.css';
import { useState } from "react";
import { navbar } from '../../constants/navbar';

const Navbar = ({ onNavbarItemClick }) => {
    const [activeNavItem, setActiveNavItem] = useState(navbar[0]);

    const handleNavbarItemClick = (item) => {
        setActiveNavItem(item);
        onNavbarItemClick(item);
    };

    return (
        <nav className={style.navbar}>
            <ul className={style.navbarBlock}>
                {navbar.map((item) => (
                    <li
                        className={`${style.navbarItem}`}
                        key={item.id}
                        onClick={() => handleNavbarItemClick(item)}
                    >
                        <p className={style.navbarItemText}>
                            {item.name}
                        </p>
                        <div   className={`${style.underliner} ${activeNavItem === item ? style.active : ''}`}></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
