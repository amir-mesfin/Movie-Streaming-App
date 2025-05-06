import React from 'react'
import style from './header.module.css'
// import NetflixLogo from '../../assets/images/NetflixLogo.png'
import NetflixLogo from '../../assets/images/NetflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className={style["header-outer-container"]}>
          <div className={style["header-container"]}>
                  <div className={style["header-left"]}>
                      <ul>
                          <li> <img src={NetflixLogo} alt="movies-logo" width="100" /> </li>
                          <li>MLA</li>
                          <li>Home</li>
                          <li>TvShow</li>
                          <li>Movies</li>
                          <li>Latest</li>
                          <li>MYlist</li>
                          <li>Browse By languages</li>
                      </ul>
                  </div>
                  <div className={style["header-right"]}>
                        <ul>
                              <li> <SearchIcon/> </li>
                              <li> <NotificationsNoneIcon/> </li>
                              <li> <AccountBoxIcon /> </li>
                              <li> <ArrowDropDownIcon/> </li>
                          </ul>
                  </div>
          </div>
     </div>
  )
}

export default Header
