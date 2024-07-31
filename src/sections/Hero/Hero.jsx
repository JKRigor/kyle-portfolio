import React from 'react'
import style from './HeroStyle.module.css'
import Formal from '../../assets/Formal.jpg'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon1.png'
import fb from '../../assets/fb.png'
import fbd from '../../assets/fb1.png'
import gh from '../../assets/gh.png'
import ghd from '../../assets/gh1.png'
import ms from '../../assets/ms.png'
import msd from '../../assets/ms1.png'
import { useTheme } from '../../common/ThemeContext'
import CV from '../../assets/CV Resume.pdf'
function Hero() {
    const {theme, toggleTheme} = useTheme()

    const themeIcon = theme === 'light' ? sun : moon;
    const themeIconfb = theme === 'light' ? fb : fbd;
    const themeIcongh = theme === 'light' ? gh : ghd;
    const themeIconms = theme === 'light' ? ms : msd;
  return (
    <section id='hero' className={style.container}> 
       <div className={style.colorCotainer}> 
        <img className={style.profile} src={Formal} alt='Profile Picture'/>
        <img className={style.colorMode} src={themeIcon} alt='color mode icon' onClick={toggleTheme}/>
        </div>
        <div className={style.info}>
            <h1>Rigor <br/> John Kyle</h1>
            <h2>Junior Frontend Dev</h2>
            <span>
                <a href='https://www.facebook.com/johnkyle.rigor.9/' target='_blank'>
                <img src={themeIconfb} alt='facebook'/>
                </a>
                <a href='https://github.com/JKRigor' target='_blank'>
                <img src={themeIcongh} alt='github'/>
                </a>
                <a href='https://m.me/johnkyle.rigor.9?hash=AbacPVzd88hkyKep&source=qr_link_share' target='_blank'>
                <img src={themeIconms} alt='messenger'/>
                </a>
            </span>
            <p className={style.description}> Passionate on developing modern React websites</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero