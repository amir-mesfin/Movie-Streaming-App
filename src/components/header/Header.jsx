import React from 'react'
import style from './header.module.css'
function Header() {
  return (
    <div className={style-header-outer-container}>
          <div className={style.header-container}>
                  <div className={style.header-left}>
                      <ul>
                          {/* <li> <img src={NetflixLogo} alt="movies-logo" width="100" /> </li> */}
                          <li>MLA</li>
                          <li>Home</li>
                          <li>TvShow</li>
                          <li>Movies</li>
                          <li>Latest</li>
                          <li>MYlist</li>
                          <li>Browse By languages</li>
                      </ul>
                  </div>
                  <div className={style.header-right}>
                        {/* <ul>
                              <li> <searchIcon/> </li>
                              <li> <NotificationNoneIcon/> </li>
                              <li> <ArrowDropDownIcon/> </li>
                          </ul> */}
                  </div>
          </div>
     </div>
  )
}

export default Header
