import React from "react";
import "./Bioinfo.css";

import profilexx from "../../assets/profile-xx.svg";
import profilex from "../../assets/profile-x.svg";
import infoline from "../../assets/bio-info-line.svg";
import jsicon from "../../assets/jsicon.svg";
import reacticon from "../../assets/reacticon.svg";
import htmlicon from "../../assets/htmlicon.svg";
import cssicon from "../../assets/cssicon.svg";
import nodeicon from "../../assets/nodeicon.svg";
import figmaicon from "../../assets/figma_logo.svg";
import cicon from "../../assets/cicon.svg";
import profilepic1 from "../../assets/profile-pic.png";
import NavBar from "../navbar/NavBar";
import { motion, AnimatePresence } from "framer-motion";

const Bioinfo = () => {
  return (
    <div className="pt-[15rem] max-sm:pt-[10rem]">
      <motion.div
        className="bio-page"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          delay: 0.3,
        }}
      >
        <div className="bio-flexcontainer">
          <div className="bio__left-container">
            <div className="bio__profilepic-box">
              <div className="bio__profile-xx">
                <img className="bio__profilepic-xx" src={profilexx} alt="xx" />
              </div>

              <div className="bio__profilebox">
                <img
                  className="bio__profilepic"
                  src={profilepic1}
                  alt="profile pic"
                />
              </div>

              <div className="bio__profile-x">
                <img className="bio__profilepic-x" src={profilex} alt="x" />
              </div>
            </div>
          </div>

          <div className="bio-info">
            <div className="bio-info-top">
              <p>
                Currently in my second year of the Software Development Diploma
                program at the Southern Alberta Institute of Technology (SAIT).
                I have acquired knowledge of Data Structures and algorithims,
                OOP concepts along with an understanding of the Software
                Development Life Cycle, this has provided me with good
                programming foundations. After begining javascript I have found
                that web design & frontend software development is what I am the
                most passionate about
              </p>
            </div>

            <div>
              <img className="bio-info-line" src={infoline} alt="infoline" />
            </div>

            <div className="bio-skills-text">
              <span>I have Experience with these Technologies</span>
            </div>

            <div className="bio__tech-icons">
              <div className="bio-info-bottom">
                <div>
                  <img
                    className="bio__js-icon animateIcon"
                    src={jsicon}
                    alt="jsicon"
                  />
                </div>

                <div>
                  <img
                    className="bio__node-icon animateIcon animateIcon--2"
                    src={nodeicon}
                    alt="nodeicon"
                  />
                </div>

                <div>
                  <img
                    className="bio__react-icon animateIcon animateIcon--3"
                    src={reacticon}
                    alt="reacticon"
                  />
                </div>

                <div>
                  <img
                    className="bio__html-icon animateIcon animateIcon--4"
                    src={htmlicon}
                    alt="htmlicon"
                  />
                </div>

                <div>
                  <img
                    className="bio__css-icon animateIcon animateIcon--5"
                    src={cssicon}
                    alt="cssicon"
                  />
                </div>

                <div>
                  <img
                    className="bio__c-icon animateIcon animateIcon--6"
                    src={cicon}
                    alt="cicon"
                  />
                </div>

                <div className="bio__figma-icon animateIcon animateIcon--7">
                  <img src={figmaicon} alt="figmaicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bioinfo;
