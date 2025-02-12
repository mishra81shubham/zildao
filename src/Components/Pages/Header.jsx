import React, { useState } from "react";
import Styles from "../../Assets/Css/Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  return (
    <>
      <div className={Styles.homeHeader}>
        <nav className={Styles.nav}>
          <input type="checkbox" id={Styles.navCheck} />
          <div className={Styles.navHeader}>
            <Link to="/" className={Styles.homeHeaderLogoCard}>
              <h4 className={Styles.homeHeaderCompanyName}>ZillDao</h4>
            </Link>
          </div>
          <div className={Styles.navBtn}>
            <label htmlFor={Styles.navCheck}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <ul className={Styles.navList}>
            {/* <li className={`${Styles.dropdown} ${Styles.dropdownHover}`}>
              <button className={Styles.dropdownToggle}>
                refhd
                <FontAwesomeIcon
                  className={Styles.iconDrop}
                  icon={faChevronDown}
                />
              </button>
              <ul className={Styles.dropdownMenu}>
                <li>
                  <Link to="/web-restaurants">esdfgh</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
