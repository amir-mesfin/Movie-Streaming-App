import React, { useState } from 'react';
import style from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={style["header-outer-container"]}>
      <div className={style["header-container"]}>
        <div className={style["header-left"]}>
          <ul className={`${style["nav-list"]} ${isMobileOpen ? style["mobile-show"] : ""}`}>
            <li className={style["logo"]}>🎬 <span>Movie-Streaming-App</span></li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Languages</li>
          </ul>
        </div>

        <div className={style["header-right"]}>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li onClick={toggleDropdown} className={style["profile"]}>
              <AccountBoxIcon />
              <ArrowDropDownIcon />
              {isDropdownOpen && (
                <div className={style["dropdown"]}>
                  <a href="#">Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
              )}
            </li>
            <li className={style["hamburger"]} onClick={toggleMobile}>
              {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
