import React from 'react';
import { Link } from "react-router-dom";
import bshape1 from "../Assets/Images/b_shape1.png";
import bi_01 from "../Assets/Images/bi_01.png";
import bi_02 from "../Assets/Images/bi_02.png";
import bi_03 from "../Assets/Images/bi_03.png";
import bi_04 from "../Assets/Images/bi_04.png";

const LoginTopSection = ({topTitle, navFromName, navToName, navigationTo}) => {
  return (
    <>
     <section className="breadcrumb pos-rel">
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">{topTitle}</h2>
            <ul className="bread-crumb clearfix ul_li_center">
              <li className="breadcrumb-item">
                <Link to={navigationTo}>{navFromName}</Link>
              </li>
              <li className="breadcrumb-item">{navToName}</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb__shape">
          <img src={bshape1} alt="image" />
        </div>
        <div className="breadcrumb__icon">
          <div className="icon icon--1">
            <div data-parallax='{"y" : 80}'>
              <img src={bi_01} alt="image" />
            </div>
          </div>
          <div className="icon icon--2">
            <div data-parallax='{"x" : -90}'>
              <img src={bi_02} alt="image" />
            </div>
          </div>
          <div className="icon icon--3">
            <div data-parallax='{"y" : -80}'>
              <img src={bi_03} alt="image" />
            </div>
          </div>
          <div className="icon icon--4">
            <div data-parallax='{"x" : 90}'>
              <img src={bi_04} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginTopSection