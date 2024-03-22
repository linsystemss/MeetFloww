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
                       <Link to={'/'}>
                         <img  src='./logo.png'   />
                       </Link>
                   </div>
                  <nav className={style.navMenu}>
                      <div className={style.navText}>
                          <HoverDropdownMenu options={optionsWhyLeexi} onSelect={handleSelect} dropName={'Why MeetFloww'} />
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
                      <Link  className={style.loginButton} to={'login'}>
                       Login
                      </Link>
                  </button>
                  <button className={`${style.loginButton} ${style.getStarted}`}>
                       <Link   to={'register'}> Try For free </Link>

                   </button>
              </div>
          </header>
     )
}

export default  Header
