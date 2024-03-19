import logo from './logo.svg';
import './App.css';
import Header from "./componenet/Header/Index";
import HomePage from "./componenet/HomePage/Index";
import Navbar from "./componenet/Navbar/Index";
import { useState ,useEffect } from 'react';
import { navbarInfo } from './constants/navbar';
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
    const [selectedNavItem, setSelectedNavItem] = useState(navbarInfo[0]);
    const [homePageInfo , setHomePageInfo] = useState('')



    const handleNavbarItemClick = (item) => {
        const selected = navbarInfo.find((i) => i.name === item.name);
        setSelectedNavItem(selected);
    }

    return (
        <div className='container'>
            <Header />
            <Navbar onNavbarItemClick={handleNavbarItemClick} />
            <HomePage selectedNavItem={selectedNavItem} />
        </div>
    );
}

export default App;
