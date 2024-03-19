import { useEffect, useState } from "react";
import style from './style.module.css';
import AOS from "aos";
import 'aos/dist/aos.css';

const HomePage = ({ selectedNavItem }) => {
    const [aosKeyLeft, setAosKeyLeft] = useState(0);
    const [aosKeyRight, setAosKeyRight] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        setAosKeyLeft(prevKey => prevKey + 1);
    }, [selectedNavItem]);

    useEffect(() => {
        setAosKeyRight(prevKey => prevKey + 1);
    }, [selectedNavItem]);

    useEffect(() => {
        AOS.refresh();
    }, [aosKeyLeft, aosKeyRight]);

    return (
        <div className={style.homePage}>
            <div key={`left_${aosKeyLeft}`} className={style.homePageLeft} data-aos="fade-right" >
                {selectedNavItem.info.map((infoItem) => (
                    <div className={style.infoItemBlock} key={infoItem.id}>
                        <div className={style.infoItemTitleBlock}>
                            <div className={style.infoItemIcon}>
                                {/*<img src={infoItem.icon} alt="Icon"/>*/}
                            </div>
                            <h3 className={style.title}>{infoItem.title}</h3>
                        </div>
                        <p className={style.text}>{infoItem.text}</p>
                    </div>
                ))}
            </div>
            <div key={`right_${aosKeyRight}`} data-aos="fade-left" data-aos-duration='1200' data-aos-delay='200'>
                <div  className={style.homePageImg}>
                    <img src={selectedNavItem.img} alt="Homepage Image" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
