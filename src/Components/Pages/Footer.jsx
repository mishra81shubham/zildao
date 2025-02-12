import React from "react";
import discord from '../../Assets/Images/discord.svg';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="site-footer footer__blockchain pos-rel pt-95 bg_img"
        style={{ backgroundImage: 'url("/assets/img/bg/footer_bg2.jpg")' }}
      >
        <div className="container">
          <div className="footer__newsletter ul_li_between mt-none-30">
            <div className="style2 mt-30">
              <h2 className="sec-title__title text-50">Get regular updates</h2>
            </div>
            <div className="footer__newsletter-form mt-30">
              <form>
                <input type="text" placeholder="Enter Your Email Address" />
                <button className="blc-btn">subscribe</button>
              </form>
            </div>
          </div>
          <div className="row mt-none-30 pb-70">
            <div className="col-lg-4 col-md-6 col-sm-6 mt-30">
              <div className="footer__widget">
                <div className="footer__widget-community text-center">
                  <h3>
                    Join Our Blockchain <br /> Community
                  </h3>
                  <a href="/">
                    <img src={discord} alt="" />
                    join
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
              <div className="footer__widget">
                <h3>Quick Links</h3>
                <ul className="footer__widget-links list-unstyled">
                  <li>
                    <a href="/">Whitepaper</a>
                  </li>
                  <li>
                    <a href="/">One pager</a>
                  </li>
                  <li>
                    <a href="/">Presentation</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Token Sale</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
              <div className="footer__widget">
                <h3>Others Links</h3>
                <ul className="footer__widget-links list-unstyled">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">API Docs</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">Team</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mt-30">
              <div className="footer__widget">
                <h3>legal</h3>
                <ul className="footer__widget-links list-unstyled">
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/">Sitemap</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__copyright-blc ul_li_between">
            <div className="footer__copyright-text mt-15">
              Copyright © 2025 Coindox. All rights reserved.
            </div>
            <ul className="footer__social ul_li mt-15">
              <li>
                <a href="/">
                <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="/">
                <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="/">
                <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
