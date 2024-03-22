import './App.css';
import { useState  } from 'react';
import { navbarInfo } from './constants/navbar';
import Routers from "./Routes/Index";
import Header from "./componenet/Header/Index";
import Footer from "./componenet/Footer/Index";
import ChatBot from "./componenet/ChatBot/ChatBot";

function App() {
    const [selectedNavItem, setSelectedNavItem] = useState(navbarInfo[0]);

    const handleNavbarItemClick = (item) => {
        const selected = navbarInfo.find((i) => i.name === item.name);
        setSelectedNavItem(selected);
    }

    return (
        <div className='container'>
            <Header />
            <Routers  handleNavbarItemClick={handleNavbarItemClick} selectedNavItem={selectedNavItem}/>
            <ChatBot/>
            <Footer />
        </div>
    );
}

export default App;
