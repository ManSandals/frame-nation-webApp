import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "./../../assets/footer-bg.jpg";
import logo from "./../../assets/logo.png";

import * as Config from "./../../constants/Config";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to={`/${Config.HOME_PAGE}`}>Frame Nation</Link>
          </div>
        </div>

        <section className="footer__text">
            <p>
               <strong>FrameNation</strong> is your gateway to the world of cinema — delivering the latest movies, 
              timeless classics, and exclusive content all in one place. 
              We strive to bring film lovers a seamless viewing experience with curated collections, 
              high-quality streaming, and up-to-date entertainment news. Whether you're exploring new releases or revisiting your favorite stories,
              FrameNation is here to frame every moment.
              </p>
              
              <p>
              &copy;  <strong>Frame Nation</strong> is a licenced movie hub. It <strong> does not stream</strong> movies {new Date().getFullYear()}
            </p>
          </section>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Home</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Contact us</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Term of service</Link>
            <Link to={`/${Config.HOME_PAGE}`}>About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Live</Link>
            <Link to={`/${Config.HOME_PAGE}`}>FAQ</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Premium</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>You must watch</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Recent release</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
