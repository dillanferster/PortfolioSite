import React, { useEffect, useRef } from "react";
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
  // WARP moving with mouse ----------- ///
  // sets the warpbox div as a varible
  const warpBoxRef = useRef(null);

  // listens for a mouse move on the page and then calls rotate element and passes in the warp varible and the event as e
  useEffect(() => {
    const handleMouseMove = (e) => rotateElement(e);

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  // takes in the event and element which is our warp varible , event is our mouse moving and clients X,Y  gets the screen cordinates of it and saves them as varible
  function rotateElement(event) {
    const warpBox = warpBoxRef.current;
    if (!warpBox) {
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // find the left 3rd of the screen
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // gets the offest from middle , how far away mouse is from the middle
    const offestX = ((x - middleX) / middleX) * 30;
    const offestY = ((y - middleY) / middleY) * 30;
    console.log(offestX, offestY);

    // changes the style of the specified property
    warpBox.style.setProperty("--rotateX", -1 * offestY + "deg");
    warpBox.style.setProperty("--rotateY", -1 * offestX + "deg");
  }

  // WARP moving with mouse ----------- ///

  return (
    <div id="homepage" className="header-flexcontainer">
      <div className="header">
        <div className="header-dillan">DILLAN FERSTER</div>

        <div className="header-rightcorner">
          <div className="theme-toggle">
            <Toggler></Toggler>
          </div>
          <div className="header-oval"></div>

          <div className="header-star">
            <img src={star} alt="star"></img>
          </div>

          <span className="header-pgnum">./0/3</span>
        </div>
      </div>

      <div className="title-card">
        <div className="left-container">
          <div className="titlecard__software">Frontend Developer</div>

          <div className="warp-img-box" ref={warpBoxRef}>
            <img
              id="warp"
              className="warp-img animateIconWarp"
              src={warp}
              alt="warp"
            />
          </div>
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
                  PROJECTS
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
                  CONTACT
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
