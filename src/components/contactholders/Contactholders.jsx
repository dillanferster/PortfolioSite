import React, { useState, useEffect } from "react";
import "./Contactholders.css";
import headerunderline from "../../assets/header-underline.svg";
import leftbrace from "../../assets/Brace-left.svg";

import xxxx from "../../assets/xxxxCT.svg";
import { HashLink as Link } from "react-router-hash-link";
import Modal from "../modal/Modal";

const Contactholders = () => {
  const [openModal, setOpenModal] = useState(false);

 

  return (
    <div id="contactpage" className="contact-page" >
      <div className="contact-header">
        <div className="contact__header-pgnum-box">
          <span className="contact__header-pgnum">./3/3</span>
        </div>
        <div className="contact-header-right">
          <Link
            className="contact__header-title-projects"
            to="#projectspage"
            smooth={true}
          >
            projects
          </Link>
          <span className="contact__header-title">contact</span>
          <Link
            className="contact__header-title-home"
            to="#homepage"
            smooth={true}
          >
            home
          </Link>

          <img
            className="contact__header-underline"
            src={headerunderline}
            alt="underline"
          />
        </div>
      </div>

      <div className="contact-flexcontainer" >
        <div className="contact__left-container">
          <img
            className="contact__left-brace"
            src={leftbrace}
            alt="contact left brace"
          />
        </div>

        <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>

        <div className="contact__main-container">
          <div className="contact__rec-1">
            <a
              className="contact__link-1"
              href="https://www.linkedin.com/in/dillan-ferster-60003b164"
              target="blank"
            >
              LINKEDIN<span className="contact-line-arrow">&#8599;</span>
            </a>
          </div>

          <div className="contact__rec-2">
            <a
              className="contact__link-2"
              href="https://github.com/dillanferster"
              target="blank"
            >
              GITHUB<span className="contact-line-arrow">&#8599;</span>
            </a>
          </div>

          <div className="contact__rec-3">
            <a className="contact__link-3" href="mailto:dillyferster@gmail.com">
              EMAIL<span className="contact-line-arrow">&#8599;</span>
            </a>
          </div>

          <div className="contact__rec-4">
            <div className="contact__link-4" onClick={() => setOpenModal(true)}>
              RESUME<span className="contact-line-arrow">&#8599;</span>
            </div>
          </div>

          <div className="contact__rec-5">
            <img className="contact__xxxx-bt" src={xxxx} alt="xxxx"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactholders;
