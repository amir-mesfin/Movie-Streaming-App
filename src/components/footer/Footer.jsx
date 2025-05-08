import React from 'react'
import style from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className={style["footer"]}>
    <div className={style["footer__container"]}>
      <div className={style["footer__icons"]}>
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className={style["footer__nav"]}>
        <div>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preference</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className={style["footer__serviceCode"]}>
        <p>Service Code</p>
      </div>
      <div className={style["footer__copyWrite"]}>
        <span>&copy; 1997 - 2024 Netflix, Inc.</span>
      </div>
    </div>
  </div>
  )
}

export default Footer
