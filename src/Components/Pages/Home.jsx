import React from "react";
import Header from "./Header";
import Styles from "../../Assets/Css/Home.module.css";
import BannerIcon from "../../Assets/Images/bannerIcon.svg";
import UserIcon from "../../Assets/Images/userProfileIcon.svg";
import CheckIcon from "../../Assets/Images/check_badge.svg";
import MiddleIcon from "../../Assets/Images/uo_bg.png";
import ShapeAbout from "../../Assets/Images/about_shape1.png";
import ShapeBg from "../../Assets/Images/about_shape2.png";
import ShapeSecond from "../../Assets/Images/about_shape3.png";
import LockIcon from "../../Assets/Images/syber_icon.svg";
import StarIcon from "../../Assets/Images/ul_icon.svg";
import ActiveIcon from "../../Assets/Images/badge_active.svg";
import DeactiveIcon from "../../Assets/Images/badge_deactive.svg";
import HomeIcon from "../../Assets/Images/s_01.svg";
import UpTradeIcon from "../../Assets/Images/s_02.svg";
import UserCardIcon from "../../Assets/Images/s_03.svg";
import MechanismsIcon from "../../Assets/Images/s_04.svg";
import CircleShape from "../../Assets/Images/s_circle_1.png";
import FingerIcon from "../../Assets/Images/s_icon.png";
import Team1 from "../../Assets/Images/team_01.png";
import Star from "../../Assets/Images/star.svg";
import tokenDistribution from "../../Assets/Images/token-distribution.png";
import bitcoinIcon from "../../Assets/Images/bitcoin_icon.png";
import rmIcon from "../../Assets/Images/rm_icon.png";
import brand1 from "../../Assets/Images/brands/brand_01.png";
import brand2 from "../../Assets/Images/brands/brand_02.png";
import brand3 from "../../Assets/Images/brands/brand_03.png";
import brand4 from "../../Assets/Images/brands/brand_04.png";
import brand5 from "../../Assets/Images/brands/brand_05.png";
import brand6 from "../../Assets/Images/brands/brand_06.png";
import brand7 from "../../Assets/Images/brands/brand_07.png";
import brand8 from "../../Assets/Images/brands/brand_08.png";
import brand9 from "../../Assets/Images/brands/brand_09.png";
import brand10 from "../../Assets/Images/brands/brand_10.png";
import brand11 from "../../Assets/Images/brands/brand_11.png";
import brand12 from "../../Assets/Images/brands/brand_12.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* Header Start Here  */}
      <Header />

      {/* banner section start here */}
      <section className={Styles.bannerMainSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className={Styles.bannerContentCard}>
                <h1>Navigating the world of blockchain</h1>
                <p>
                  In our digital world, trust, security, and efficiency are
                  vital. Enter blockchain technology, the game-changer.
                </p>
                <div className={Styles.btns}>
                  <a className={Styles.blcBtn} href="/">
                    get started
                  </a>
                  <a className={Styles.blcBtnNext} href="/">
                    white paper
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className={Styles.bannerSideIconsMainCard}>
                <div className={Styles.bannerSideIconCard1}>
                  <span>Secure &amp; Safe</span>
                  <img src={BannerIcon} alt="icon" />
                </div>
                <div className={Styles.bannerSideIconCard2}>
                  <span>Tested</span>
                  <img src={BannerIcon} alt="icon" />
                </div>
                <div className={Styles.bannerSideIconCard3}>
                  <span>Trustworthy</span>
                  <img src={BannerIcon} alt="icon" />
                </div>
                <div className={Styles.bannerSideIconCard4}>
                  <img src={BannerIcon} alt="icon" />
                  <span>Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.userOptionsMainSection}>
        <div className="container">
          <div className={Styles.userOptionsTextCard}>
            <h1>Our Users Options</h1>
            <p>We offer tow types of account on the platform</p>
          </div>
          <div className={`row ${Styles.userOptionsRowCard}`}>
            <div className="col-md-4">
              <div className={Styles.userOptionsPersonalCard}>
                <div className={Styles.userOptionsPersonalIcon}>
                  <img src={UserIcon} alt="icon" />
                </div>
                <h3>Personal</h3>
                <ul className={Styles.userOptionsPersonalListCard}>
                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Confidentiality</h4>
                    <p>confidentiality involves safeguarding sensitive.</p>
                  </li>

                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Security</h4>
                    <p>Security is the practice of protecting individuals.</p>
                  </li>

                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Easy access to personal data</h4>
                    <p>It's essential to be cautious about sharing.</p>
                  </li>

                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Testing and proactive communication</h4>
                    <p>
                      Testing and proactive communication are essential
                      components of successful projects.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.userOptionsMiddleCard}>
                <img src={MiddleIcon} alt="Icon" />
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.userOptionsCommercialCard}>
                <div className={Styles.userOptionsPersonalIcon}>
                  <img src={UserIcon} alt="icon" />
                </div>
                <h3>Personal</h3>
                <ul className={Styles.userOptionsPersonalListCard}>
                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Confidentiality</h4>
                    <p>confidentiality involves safeguarding sensitive.</p>
                  </li>

                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Security</h4>
                    <p>Security is the practice of protecting individuals.</p>
                  </li>

                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Easy access to personal data</h4>
                    <p>It's essential to be cautious about sharing.</p>
                  </li>

                  <li>
                    <span>
                      <img src={CheckIcon} alt="icon" />
                    </span>
                    <h4>Testing and proactive communication</h4>
                    <p>
                      Testing and proactive communication are essential
                      components of successful projects.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.blockchainAddressingSection}>
        <div className="container">
          <div className={`row ${Styles.userOptionsRowCard}`}>
            <div className="col-md-6">
              <div className={Styles.blockchainAddressingImgCard}>
                <img src={ShapeAbout} alt="icon" />
                <div className={Styles.blockchainAddressingBgShapeCard}>
                  <div>
                    <img src={ShapeBg} alt="icon" />
                  </div>
                </div>
                <div className={Styles.blockchainAddressingBgShapeSecond}>
                  <div>
                    <img src={ShapeSecond} alt="icon" />
                  </div>
                </div>

                <div className={Styles.blockchainAddressingLockIcon}>
                  <img src={LockIcon} alt="icon" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={Styles.blockchainAddressingTextMainCard}>
                <div className={Styles.blockchainAddressingTextCard}>
                  <h2>Blockchain Addressing Industry Pain Points</h2>
                  <p>
                    Blockchain technology has brought significant advancements
                    to various industries. Here are some common pain points
                    faced by industries when it comes to blockchain addressing.
                  </p>
                </div>
                <ul className={Styles.blockchainAboutListCard}>
                  <li>
                    <img src={StarIcon} alt="icon" />
                    Privacy and Security
                  </li>
                  <li>
                    <img src={StarIcon} alt="icon" />
                    Cost and Complexity
                  </li>
                  <li>
                    <img src={StarIcon} alt="icon" />
                    Immutable Data
                  </li>
                  <li>
                    <img src={StarIcon} alt="icon" />
                    Regulatory Compliance
                  </li>
                  <li>
                    <img src={StarIcon} alt="icon" />
                    Interoperability
                  </li>
                  <li>
                    <img src={StarIcon} alt="icon" />
                    Energy Consumption
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.ourAdvantagesMainSection}>
        <div className="container">
          <div className={Styles.ourAdvantagesTextCard}>
            <h2>
              Comparison With Competitors and <br /> Our Advantages
            </h2>
            <p>Analyzing competitors showcases our standout advantages</p>
          </div>
          <div>
            <table class="advantages-table table-responsive">
              <thead>
                <tr>
                  <th>Futures</th>
                  <th>IDV System</th>
                  <th>Creating Apps</th>
                  <th>Confidentiality</th>
                  <th>Without Gadget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>coindox</td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Civic</td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Vilid.global</td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Hypr</td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={DeactiveIcon} alt="" />
                  </td>
                  <td>
                    <img src={ActiveIcon} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={Styles.blockchainSolutionSectionCard}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={Styles.blockchainSolutionMainCard}>
                <div className={Styles.blockchainSolutionMainTextCard}>
                  <h2>
                    Our Best Blockchain <br /> Solution Platform
                  </h2>
                  <p>
                    A blockchain solution platform is a comprehensive software
                    or infrastructure that enables businesses and developers to
                    build,
                  </p>
                </div>
                <ul className={Styles.blockchainSolutionListCard}>
                  <li>
                    <div className={Styles.blockchainSolutionListIconCard}>
                      <img src={HomeIcon} alt="icon" />
                    </div>
                    <h4>Blockchain Protocol Support</h4>
                    <p>
                      Our supports different blockchain protocols, such as
                      Ethereum
                    </p>
                  </li>

                  <li>
                    <div className={Styles.blockchainSolutionListIconCard}>
                      <img src={UpTradeIcon} alt="icon" />
                    </div>
                    <h4>Analytics and Monitoring</h4>
                    <p>
                      Comprehensive analytics and monitoring tools are included
                    </p>
                  </li>

                  <li>
                    <div className={Styles.blockchainSolutionListIconCard}>
                      <img src={UserCardIcon} alt="icon" />
                    </div>
                    <h4>Security Measures</h4>
                    <p>Robust security features and cryptographic protocols</p>
                  </li>

                  <li>
                    <div className={Styles.blockchainSolutionListIconCard}>
                      <img src={MechanismsIcon} alt="icon" />
                    </div>
                    <h4>Governance Mechanisms</h4>
                    <p>Some platforms provide built-in governance features</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className={Styles.blockchainSolutionImagesCard}>
                <img src={CircleShape} alt="img" />
                <div className={Styles.solutionsCricleImagesCard}>
                  <div className={Styles.cricleCardFirst}>
                    <img src={CircleShape} alt="img" />
                  </div>
                  <div className={Styles.cricleCardSecond}>
                    <img src={CircleShape} alt="img" />
                  </div>
                  <div className={Styles.cricleCardThird}>
                    <img src={CircleShape} alt="img" />
                  </div>
                </div>
                <div className={Styles.fingerPrintIconCard}>
                  <img src={FingerIcon} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="token-update">
        <div class="container">
          <div class="sec-title text-center">
            <h2 class="sec-title__title text-50 mb-25">
              Live Token Market Updates
            </h2>
            <p>Stay Informed with Live Data and Analysis</p>
          </div>
          <div class="row mt-none-30">
            <div class="col-lg-6 mt-30">
              <h3 class="token-update__title">Information About Tokens</h3>
              <ul class="token-update__data list-unstyled">
                <li>
                  <span>Token Name</span>
                  <strong>coindox(ITU)</strong>
                </li>
                <li>
                  <span>Nominal Price</span>
                  <strong>1 ITU =0,025 USD</strong>
                </li>
                <li>
                  <span>Number of Tokens Produced</span>
                  <strong>7 BN ITU</strong>
                </li>
                <li>
                  <span>Unsold Tokens</span>
                  <strong>Burn Smart Contract</strong>
                </li>
                <li>
                  <span>Type of the Token</span>
                  <strong>ERC - 20</strong>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 mt-30">
              <h3 class="token-update__title">Terms &amp; Conditions</h3>
              <ul class="token-update__data list-unstyled">
                <li>
                  <span>Minimum Payment</span>
                  <strong>100 USD</strong>
                </li>
                <li>
                  <span>Maximum Payment in the first 7 days</span>
                  <strong>100 000 USD</strong>
                </li>
                <li>
                  <span>Maximum Payment in the first 7 days</span>
                  <strong>No Limits</strong>
                </li>
                <li>
                  <span>Soft Cap</span>
                  <strong>15 MLN USD</strong>
                </li>
                <li>
                  <span>Hard Cap</span>
                  <strong>75 MLN USD</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="token-chat">
        <div class="container">
          <div class="sec-title text-center">
            <h2 class="sec-title__title">30% Bonus Active Now</h2>
            <p>The earlier you invest in CRR, higher bonuses you get</p>
          </div>
          <ul class="token-chat__wrap ul_li_between">
            <li>
              <div class="token-chat__animation"></div>
              <span class="number">30%</span>
              <span class="date">Sep 17-oct 9</span>
            </li>
            <li>
              <span class="number">25%</span>
              <span class="date">Oct 17 - Nov4</span>
            </li>
            <li>
              <span class="number">20%</span>
              <span class="date">Nov 5 - Dec4</span>
            </li>
            <li>
              <span class="number">15%</span>
              <span class="date">Dec 26-Jan28</span>
            </li>
            <li>
              <span class="number">10%</span>
              <span class="date">Jan 17-Feb18</span>
            </li>
            <li>
              <span class="number">5%</span>
              <span class="date">Feb 16-Mar10</span>
            </li>
            <li>
              <span class="number">0%</span>
              <span class="date">Mar 11-Apr27</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="team" class="team team__bg pb-120 pt-120">
        <div class="container">
          <div class="sec-title text-center">
            <h2 class="sec-title__title">Our Dedicated Team</h2>
            <p>Always ready our team to help you</p>
          </div>
          <div class="row mt-none-30">
            <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
              <div class="team__single text-center pos-rel">
                <div class="avatar">
                  <img src={Team1} alt="img" />
                </div>
                <div class="content">
                  <h3>Yevhen Oleksiy</h3>
                  <span>Blockchain Architect</span>
                </div>
                {/* <div class="team__social style2 ul_li_center mt-30">
                  <ul class="team__social-link link-left ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                  <span class="h-icon">
                    <i class="far fa-plus"></i>
                  </span>
                  <ul class="team__social-link link-right ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div class="rating">
                  <img src={Star} alt="img" />
                  5.0
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
              <div class="team__single text-center pos-rel">
                <div class="avatar">
                  <img src={Team1} alt="img" />
                </div>
                <div class="content">
                  <h3>Pavlo Fedor</h3>
                  <span>Marketing Manger</span>
                </div>
                {/* <div class="team__social style2 ul_li_center mt-30">
                  <ul class="team__social-link link-left ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                  <span class="h-icon">
                    <i class="far fa-plus"></i>
                  </span>
                  <ul class="team__social-link link-right ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div class="rating">
                  <img src={Star} alt="img" />
                  5.0
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
              <div class="team__single text-center pos-rel">
                <div class="avatar">
                  <img src={Team1} alt="img" />
                </div>
                <div class="content">
                  <h3>Serhii Anatolii</h3>
                  <span>Founder &amp; CEO</span>
                </div>
                {/* <div class="team__social style2 ul_li_center mt-30">
                  <ul class="team__social-link link-left ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                  <span class="h-icon">
                    <i class="far fa-plus"></i>
                  </span>
                  <ul class="team__social-link link-right ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div class="rating">
                  <img src={Star} alt="img" />
                  5.0
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
              <div class="team__single text-center pos-rel">
                <div class="avatar">
                  <img src={Team1} alt="img" />
                </div>
                <div class="content">
                  <h3>Ivan Petrov</h3>
                  <span>Blockchain Engineer</span>
                </div>
                {/* <div class="team__social style2 ul_li_center mt-30">
                  <ul class="team__social-link link-left ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                  <span class="h-icon">
                    <i class="far fa-plus"></i>
                  </span>
                  <ul class="team__social-link link-right ul_li">
                    <li>
                      <a href="/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div class="rating">
                  <img src={Star} alt="img" />
                  5.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- */}

      <section className="token-distribution p-relative z-index-1">
        <div className="container">
          <div className="row align-items-center mt-none-30">
            <div className="col-xl-5 col-lg-6 mt-30">
              <div className="token-distribution__content pos-rel">
                <div className="token-distribution__bg" />
                <div className="icon mb-45">
                  <img src={bitcoinIcon} alt="image" />
                </div>
                <div className="sec-title style2 mb-45">
                  <h2 className="sec-title__title text-50 mb-25">
                    Token Distribution
                  </h2>
                  <p className="text-20 text-white mb-55">
                    Token distribution refers to the process of allocating and
                    distributing tokens within a blockchain ecosystem.
                  </p>
                  <p>
                    When a new blockchain project is launched, a specific number
                    of tokens are created, and these tokens are distributed
                    among various stakeholders, including founders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 mt-30">
              <div className="token-distribution__img text-lg-end">
                <img src={tokenDistribution} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------------ */}
      <section id="roadmap" className="roadmap pb-135 pt-120">
        <div className="container">
          <div className="sec-title style2 text-center mb-60">
            <h2 className="sec-title__title text-50 mb-25">Roadmap</h2>
            <p>blockchain a Solid Infrastructure for Growth</p>
          </div>
          <div className="roadmap__list pos-rel">
            <div className="roadmap__list-box">
              <div className="roadmap__list-inner">
                <div className="icon">
                  <img src={rmIcon} alt="" />
                </div>
                <h3>
                  Stage 1 <br /> Q1 - 2023
                </h3>
                <ul className="list-unstyled">
                  <li>Ideation</li>
                  <li>Proof of Concept</li>
                  <li>Business Deck</li>
                  <li>Security Audit</li>
                  <li>Token on BEP 20</li>
                </ul>
              </div>
            </div>
            <div className="roadmap__list-box">
              <div className="roadmap__list-inner">
                <div className="icon">
                  <img src={rmIcon} alt="" />
                </div>
                <h3>
                  Stage 2 <br /> Q2 - 2023
                </h3>
                <ul className="list-unstyled">
                  <li>Mainnet Launch</li>
                  <li>Smart Contract Upgrade</li>
                  <li>Cross-Chain Interoperability</li>
                  <li>Governance Model Implementation</li>
                  <li>Whitepaper Release</li>
                </ul>
              </div>
            </div>
            <div className="roadmap__list-box">
              <div className="roadmap__list-inner">
                <div className="icon">
                  <img src={rmIcon} alt="" />
                </div>
                <h3>
                  Stage 3 <br /> Q3 - 2023
                </h3>
                <ul className="list-unstyled">
                  <li>Decentralized Finance Expansion</li>
                  <li>Proof of Concept</li>
                  <li>Privacy Enhancements</li>
                  <li>Developer Grants Program</li>
                  <li>BCL Mobile App</li>
                </ul>
              </div>
            </div>
            <div className="roadmap__list-box">
              <div className="roadmap__list-inner">
                <div className="icon">
                  <img src={rmIcon} alt="" />
                </div>
                <h3>
                  Stage 4 <br /> Q4 - 2023
                </h3>
                <ul className="list-unstyled">
                  <li>Builder NFT Airdrop</li>
                  <li>Website Launch</li>
                  <li>Legal Opinion</li>
                  <li>NFT Marketplace Launch</li>
                  <li>Whitepaper Release</li>
                </ul>
              </div>
            </div>
            <div className="roadmap__list-box">
              <div className="roadmap__list-inner">
                <div className="icon">
                  <img src={rmIcon} alt="" />
                </div>
                <h3>
                  Stage 5 <br /> Q5 - 2024
                </h3>
                <ul className="list-unstyled">
                  <li>Scalability Improvements</li>
                  <li>Real-World Integration</li>
                  <li>User-Friendly Wallet</li>
                  <li>Sustainable Blockchain</li>
                  <li>Global Community Expansion</li>
                </ul>
              </div>
            </div>
            <div className="roadmap__list-box">
              <div className="roadmap__list-inner">
                <div className="icon">
                  <img src={rmIcon} alt="" />
                </div>
                <h3>
                  Stage 6 <br /> Q6 - 2024
                </h3>
                <ul className="list-unstyled">
                  <li>Citizenship and land parcel</li>
                  <li>Meta Event Arena Launch</li>
                  <li>First Planet Phase 1 Launch</li>
                  <li>NFT Artist Onboarding Release</li>
                  <li>Initial Metaverse Offering Launce</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------------------------------------- */}

      <section className="faq pb-75">
        <div className="container">
          <div className="sec-title style2 text-center mb-40">
            <h2 className="sec-title__title text-50 mb-25">
              Frequently Asked Questions
            </h2>
            <p>Have questions? We have answers!</p>
          </div>
          <div className="faq__blockchain">
            <div className="accordion_box clearfix accordion" id="accordionOne">
              <div className="block accordion-item   ">
                <button
                  className="acc-btn accordion-button  collapsed"
                  type="button"
                >
                  What is Blockchain?
                  <span className="arrow">
                    <span />
                  </span>
                </button>
              </div>
              <div className="block accordion-item   ">
                <button
                  className="acc-btn accordion-button  collapsed"
                  type="button"
                >
                  How is Blockchain Secure?
                  <span className="arrow">
                    <span />
                  </span>
                </button>
              </div>
              <div className="block accordion-item   ">
                <button
                  className="acc-btn accordion-button  collapsed"
                  type="button"
                >
                  What is the Difference Between Public and Private Blockchains?
                  <span className="arrow">
                    <span />
                  </span>
                </button>
              </div>
              <div className="block accordion-item   ">
                <button
                  className="acc-btn accordion-button  collapsed"
                  type="button"
                >
                  How Can I Get Started with Blockchain?
                  <span className="arrow">
                    <span />
                  </span>
                </button>
              </div>
              <div className="block accordion-item   ">
                <button
                  className="acc-btn accordion-button  collapsed"
                  type="button"
                >
                  What Are Some Real-World Use Cases of Blockchain?
                  <span className="arrow">
                    <span />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------- */}

      <section className="brand brand__sec-bg pb-90 pos-rel">
        <div className="container">
          <div className="brand__wrap pos-rel">
            <div className="brand__bg" />
            <div className="sec-title style2 text-center mb-50">
              <h2 className="sec-title__title text-50 mb-25">Our Partners</h2>
              <p>Discover Our Trusted Blockchain Partners</p>
            </div>
            <div className="brand__item-wrap">
              <div className="brand__single">
                <Link to="/">
                  <img src={brand1} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand2} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand3} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand4} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand5} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand6} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand7} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand8} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand9} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand10} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand11} alt="brand" />
                </Link>
              </div>
              <div className="brand__single">
                <Link to="/">
                  <img src={brand12} alt="brand" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}

      <Footer/>
    </>
  );
};

export default Home;
