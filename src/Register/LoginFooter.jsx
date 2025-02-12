import React from "react";
import pdf from '../Assets/Images/pdf.svg';
import logo from '../Assets/Images/logo.svg';
import f_icon1 from '../Assets/Images/f_icon1.png';
import f_icon2 from '../Assets/Images/f_icon2.png';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const LoginFooter = () => {
  return (
    <>
      <footer className="site-footer footer__ico pos-rel">
        <div className="container-fluid">
          <div className="row mt-none-30">
            <div className="col-lg-4 mt-30">
              <div className="footer__widget footer__subscribe">
                <h2>Subscribe newsletter</h2>
                <p>
                  Pre-ICOs typically offer early access to the <br /> project's
                  tokens before the main ICO.
                </p>
                <form>
                  <input type="text" placeholder="coindox@gmail.com" />
                  <button>
                  <FaTelegramPlane size={20} color="#fff"/>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-8 mt-30">
              <div className="footer__widget text-lg-end">
                <h2>Download Documents</h2>
                <div className="footer__document ul_li_right">
                  <a
                    className="footer__document-item text-center"
                    href="/login"
                  >
                    <div className="icon">
                      <img src={pdf} alt="pdf" />
                    </div>
                    <span className="title">
                    <FaCloudDownloadAlt  size={20} style={{marginRight:5}}/>
                      white paper
                    </span>
                  </a>
                  <a
                    className="footer__document-item text-center"
                    href="/login"
                  >
                    <div className="icon">
                    <img src={pdf} alt="pdf" />
                    </div>
                    <span className="title">
                    <FaCloudDownloadAlt  size={20} style={{marginRight:5}}/>
                      one paper
                    </span>
                  </a>
                  <a
                    className="footer__document-item text-center"
                    href="/login"
                  >
                    <div className="icon">
                    <img src={pdf} alt="pdf" />
                    </div>
                    <span className="title">
                    <FaCloudDownloadAlt  size={20} style={{marginRight:5}}/>
                      privacy policy
                    </span>
                  </a>
                  <a
                    className="footer__document-item text-center"
                    href="/login"
                  >
                    <div className="icon">
                    <img src={pdf} alt="pdf" />
                    </div>
                    <span className="title">
                    <FaCloudDownloadAlt  size={20} style={{marginRight:5}}/>
                      terms of sale
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom ul_li_between mt-50">
            <div className="footer__logo mt-20">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <ul className="footer__social ul_li mt-20">
              <li>
                <a href="/login">
                <FaFacebookF size={20} color="#fff"/>
                </a>
              </li>
              <li>
                <a href="/login">
                <FaTwitter size={20} color="#fff"/>
                </a>
              </li>
              <li>
                <a href="/login">
                <FaInstagram size={20} color="#fff"/>
                </a>
              </li>
              <li>
                <a href="/login">
                <FaLinkedinIn size={20} color="#fff"/>
                </a>
              </li>
              <li>
                <a href="/login">
                <FaTelegramPlane size={20} color="#fff"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright mt-35">
          <div className="container">
            <div className="footer__copyright-inner ul_li_between">
              <div className="footer__copyright-text mt-15">
                Copyright © 2025 coindox. All rights reserved.
              </div>
              <ul className="footer__links ul_li_right mt-15">
                <li>
                  <a href="/login">Privacy</a>
                </li>
                <li>
                  <a href="/login">Cookies</a>
                </li>
                <li>
                  <a href="/login">Terms</a>
                </li>
                <li>
                  <a href="/login">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__icon-shape">
          <div className="icon icon--1">
            <div data-parallax='{"x" : -80}'>
              <img src={f_icon1} alt="image" />
            </div>
          </div>
          <div className="icon icon--2">
            <div data-parallax='{"x" : 80}'>
              <img src={f_icon2} alt="image" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LoginFooter;
