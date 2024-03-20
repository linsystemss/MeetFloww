import './App.css';
import Header from "./componenet/Header/Index";
import HomePage from "./componenet/HomePage/Index";
import Navbar from "./componenet/Navbar/Index";
import { useState ,useEffect } from 'react';
import { navbarInfo } from './constants/navbar';
import SocialMedia from "./componenet/socialMediaAnimation/Index";
import Footer from "./componenet/Footer/Index";

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
            <SocialMedia />
            <Footer />
        </div>
    );
}

export default App;
