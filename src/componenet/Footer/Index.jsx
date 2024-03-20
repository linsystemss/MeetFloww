
import style from  './style.module.css'
import {aboutOptions, legalOptions, optionsWhyLeexi} from './../../constants/dropDown'
const Footer = () => {
    return (
         <footer className={style.footer}>
             <div className={style.footerItem}>
                 <div className={style.logo}>
                     <img src={'./logo.png'}/>
                 </div>

             </div>

             <div className={style.footerItem}>
                 <p></p>
             </div>
             <div className={style.footerItem}>
                 <h3>MeetFloww</h3>
                 {optionsWhyLeexi.map((item , index)=> {
                      return <p key={index}>{item.label}</p>
                 })}
              </div>
             <div className={style.footerItem}>
                 <h3>About us</h3>
                 {aboutOptions.map((item,index) => {
                     return <p key={index}>{item.label}</p>
                 })}
             </div>
             <div className={style.footerItem}>
                 <h3>Legal notice</h3>
                 {legalOptions.map((item , index)=> {
                     return <p key={index}>{item.label}</p>
                 })}
             </div>
         </footer>
    )

}


export  default  Footer
