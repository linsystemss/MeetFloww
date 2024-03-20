
import {useCallback, useEffect, useState} from 'react'
import  style from './style.module.css'
import './AnimatedLine.css';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import {oprionsParticl} from '../../config/config'
import { TbBrandZoom } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';

import { SiGooglemeet ,SiGooglecalendar , SiMicrosoftteams } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";


const SocialMedia = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const [animationPlay , setAnimationPlay] = useState(false)

    useEffect(() => {
        if (inView) {
            setAnimationPlay(true)
        }else{
            setAnimationPlay(false)

        }
    }, [inView]);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div className={style.socialMediaBlock} ref={ref}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={oprionsParticl}
            />
            {animationPlay ?
                <>
                    <div className={'title'}>
                        <h1>Our integrations and APIs</h1>
                        <h3 >To guarantee you an optimal use</h3>
                    </div>

                <div className={style.circle}>
                    <img  src='./mfLogo.png' alt={'Logo'} style={{borderRadius: '50%'}}/>
                </div>
                    <div className={style.animationCurly}>

                        <svg className={style.minCircle} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green"></circle>
                            <foreignObject x="0" y="0" width="100%" height="100%">
                                <div className={style.minCircleIcons} xmlns="http://www.w3.org/1999/xhtml">
                                    <TbBrandZoom className={style.icons} color={'white'} />
                                </div>
                            </foreignObject>
                        </svg>
                        <svg className={style.minCircleTwo} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                            <foreignObject x="0" y="0" width="100%" height="100%">
                                <div className={style.minCircleIcons} xmlns="http://www.w3.org/1999/xhtml">
                                    <SiMicrosoftteams className={style.icons} color={'white'} />
                                </div>
                            </foreignObject>

                        </svg>

                        <svg className={style.minCircleThree} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                            <foreignObject x="0" y="0" width="100%" height="100%">
                                <div className={style.minCircleIcons} xmlns="http://www.w3.org/1999/xhtml">
                                    <SiGooglemeet className={style.icons} color={'white'} />
                                </div>
                            </foreignObject>

                        </svg>
                        <svg className={style.minCircleFor} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                            <foreignObject x="0" y="0" width="100%" height="100%">
                                <div className={style.minCircleIcons} xmlns="http://www.w3.org/1999/xhtml">
                                    <SiGooglecalendar className={style.icons} color={'white'} />
                                </div>
                            </foreignObject>
                        </svg>
                        <svg className={style.minCircleFive} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                            <foreignObject x="0" y="0" width="100%" height="100%">
                                <div className={style.minCircleIcons} xmlns="http://www.w3.org/1999/xhtml">
                                    <ImFacebook2 className={style.icons} color={'white'} />
                                </div>
                            </foreignObject>
                        </svg>
                        <svg className={style.minCircleSix} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                        </svg>
                        <svg className={style.minCircleSeven} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                        </svg>
                        <svg className={style.minCircleEight} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="green">
                            </circle>
                        </svg>


                        <svg className='svg' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             width="100%" height="100%" viewBox="0 0 1024 1024" enableBackground="new 0 0 400 400"
                             xmlSpace="preserve">
                            <path className='path' fill="none" stroke="#5f646f" strokeWidth="4"
                                  strokeMiterlimit="4" strokeLinecap="round" strokeLinejoin="round"
                                  d="
                               M512,512 q50,-100 0,-200 t0,-295
                               M512,512 q100,-25 100,-100 t95,-95 q100,-25 100,-100 t95,-95
                               M512,512 q75,50 160,0 t150,0 s75,75 200,0
                               M512,512 q100,25 100,100 t95,95 q100,25 100,100 t95,95
                               M512,512 q-75,50 0,150 t0,175 s-75,75 0,180
                               M512,512 q-25,50 -100,50 t-95,95 q-25,75 -100,75 t-125,125
                               M512,512 q-50,-50 -150,0 t-150,0 s-50,-50 -195,0
                               M512,512 q-50,-100 -125,-75 t-100,-100 q-25,-100 -100,-75 t-100,-100
                               "/>
                        </svg>
                    </div>
                </>
                :  <div></div>
                }

        </div>
    );
}


export  default  SocialMedia
