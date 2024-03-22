import 'aos/dist/aos.css';
import HomePage from "./Home";
import Navbar from "../Navbar/Index";
import SocialMedia from "../socialMediaAnimation/Index";
import PricingTable from "../Price/Index";
import Accordion from "../Accordion/Index";
import {items} from  "../../constants/accardion"
import style from './style.module.css'

const Home = ({selectedNavItem , handleNavbarItemClick}) => {
   return( <>
       <div className={style.button}>
           <button>Try For Free</button>
       </div>

       <Navbar onNavbarItemClick={handleNavbarItemClick} />
        <HomePage selectedNavItem={selectedNavItem} />
        <SocialMedia />
        <PricingTable/>
        <Accordion  items={items}/>
    </>)

}

export default Home;
