import React from 'react'
import ProfileImage from './imgs/Screenshot_41.png'
import ImageEmail from './imgs/icon-mail.svg'
import ImageLinkedin from './imgs/icon-linkedin-white.svg'

export default function Header() {
    return (
              <header className="header--content">
      <img className="header--img" src={ProfileImage}/>
      <h1 className="header--title">Danilo Klein</h1>
      <h3 className="header--subtitle">Front-end Developer</h3>
      <p className="header--website">daniloklein.com</p>
      
      <div className="btns">
      <a href='#' className="header--btn_email" target="_blank"><img className="header--btn-img-mail" src={ImageEmail} />Email</a>
      <a href='#'className="header--btn_linkedin" target="_blank"><img className="header--btn-img-linkedin"  src={ImageLinkedin} />Linkedin</a>
      </div>
      
      </header>
        
    )
}
