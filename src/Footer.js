import React from 'react'
import IconTwitter from './imgs/icon-twt.svg'
import IconFacebook from './imgs/icon-fb.svg'
import IconInstagram from './imgs/icon-ig.svg'
import IconLinkedin from './imgs/icon-linkedin.svg'
import IconGithub from './imgs/icon-github.svg'

export default function Footer() {
    
    return (
              <footer className="footer--content">
      
      <a className="footer--twitter_link" href='#'><img  src={IconTwitter} alt="twitter link" /> </a>
      <a className="footer--facebook_link" href='#'><img src={IconFacebook}  alt="facebook link" /> </a>
      <a className="footer--instagram_link" href='#'><img  src={IconInstagram}  alt="instagram link" /></a>
      <a className="footer--linkedin_link" href='#'><img  src={IconLinkedin}  alt="github link" /></a>
      <a className="footer--github_link" href='#'><img  src={IconGithub} alt="github link" /></a>
        
      </footer>
    )
}