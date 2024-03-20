import style from './style.module.css'
import {useState} from "react";
import HoverDropdownMenu from "../DropDown/DropDown";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from "react-router-dom";
import {optionsWhyLeexi , solutionsOptions ,aboutOptions} from  '../../constants/dropDown'


const Header = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (option) => {
        setSelectedValue(option);
    };
     return(
          <header className={style.header}>
              <div className={style.headerLeft}>
                   <div className={style.logo}>
                         <img  src='./logo.png'   />
                   </div>
                  <nav className={style.navMenu}>
                      <div className={style.navText}>
                          <HoverDropdownMenu options={optionsWhyLeexi} onSelect={handleSelect} dropName={'Why Leexi'} />
                          <IoIosArrowForward color='white' className={style.arrow} />
                      </div>
                      <div className={style.navText}>
                          <HoverDropdownMenu options={solutionsOptions} onSelect={handleSelect} dropName={'Solutions'} />
                          <IoIosArrowForward color='white'  className={style.arrow} />
                      </div>
                      <div className={style.navText}>
                          <HoverDropdownMenu options={aboutOptions} onSelect={handleSelect} dropName={'About us'} />
                          <IoIosArrowForward color='white'   className={style.arrow}/>
                      </div>
                      <div className={style.navText}>
                          <Link className='link' style={{color: 'white'}} to={'/'}>Pricing</Link>
                      </div>
                  </nav>
              </div>
              <div className={style.headerButtons}>
                  <button className={style.loginButton}>
                       Login
                  </button>
                  <button className={`${style.loginButton} ${style.getStarted}`}>
                        Try For free
                   </button>
              </div>
          </header>
     )
}

export default  Header
