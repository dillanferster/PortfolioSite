import React from "react";
import "./Header.css";

import warp from "../../assets/warp.svg";
import barcode from "../../assets/barcode2.svg";
import headerline from "../../assets/header-line.svg";
import headerx from "../../assets/x.svg";
import star from "../../assets/star1.svg";
import oval from "../../assets/header-oval.svg";
import { HashLink as Link } from "react-router-hash-link";
import { Toggler } from "../../components";

const Header = () => {
  return (
    <div id="homepage" className="header-flexcontainer">
      <div className="header">
        <div className="header-dillan">DILLAN FERSTER</div>

        <div className="header-rightcorner">
          <div className="theme-toggle">
            <Toggler></Toggler>
          </div>
          <div className="header-oval">
            {" "}
            <img src={oval} alt="oval"></img>
          </div>

          <div className="header-star">
            <img src={star} alt="star"></img>
          </div>

          <span className="header-pgnum">./0/3</span>
        </div>
      </div>

      <div className="title-card">
        <div className="left-container">
          <div className="titlecard__software">Frontend Developer</div>

          <img className="warp-img animateIconWarp" src={warp} alt="warp" />
        </div>

        <div className="middle-container">
          <div>
            <img className="header__middle-x" src={headerx} alt="middle x" />
          </div>

          <div>
            <img
              className="header__middle-line"
              src={headerline}
              alt="middle line"
            />
          </div>

          <div className="titlecard__barcode">
            <img className="barcode" src={barcode} alt="barcode" />
          </div>
        </div>

        <div className="right-container">
          <nav className="navbar-flexcontainer-nav">
            <div className="navbar-flexcontainer">
              <div className="nav-bio">
                <Link
                  className="nav-bio-link"
                  to="#biopage"
                  spy={true}
                  activeClass="nav-bio-link-active"
                  smooth={true}
                >
                  BIO
                </Link>
              </div>

              <div className="nav-projects">
                <Link
                  className="nav-projects-link"
                  to="#projectspage"
                  spy={true}
                  activeClass="nav-projects-link-active"
                  smooth={true}
                >
                  projects
                </Link>
              </div>

              <div className="nav-contact">
                <Link
                  className="nav-contact-link"
                  to="#contactpage"
                  spy={true}
                  activeClass="nav-contact-link-active"
                  smooth={true}
                >
                  contact
                </Link>
                {/* <button className='bio-button'>contact</button> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
