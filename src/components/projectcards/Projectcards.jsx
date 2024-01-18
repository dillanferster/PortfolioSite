import React, { useState } from "react";
import "./Projectcards.css";
import rightbrace from "../../assets/Brace-right.svg";
import headerunderline from "../../assets/header-underline.svg";
import xxxx from "../../assets/xxxx1.svg";
import projectcard from "../../assets/project-rec.svg";
import { HashLink as Link } from "react-router-hash-link";
import Libapp from "../../assets/Libapp2.png";
import jQuery from "jquery";

const Projectcards = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div id="projectspage" className="projects-page">
      <div className="projects-header">
        <div className="projects-header-left">
          <Link
            className="projects__header-title-bio"
            to="#biopage"
            smooth={true}
          >
            bio
          </Link>

          <span className="projects__header-title">Projects</span>

          <Link
            className="projects__header-title-contact"
            to="#contactpage"
            smooth={true}
          >
            contact
          </Link>

          <img
            className="projects__header-underline"
            src={headerunderline}
            alt="underline"
          />
        </div>

        <div className="projects__header-pgnum-box">
          <span className="projects__header-pgnum">./2/3</span>
        </div>
      </div>

      <div className="projects-flexcontainer">
        <div className="projects__left-container">
          <div className="projects__card-left">
            <div className="card-holder-left">
              <div
                id="card-move"
                className={` ${isActive ? "active" : ""}`}
                onClick={handleCardClick}
              >
                <div className="projects__card__top-display-pic__box">
                  <img
                    className="projects__card__top-display-pic"
                    src={Libapp}
                    alt="libapp"
                  ></img>
                </div>

                <div className="projects__card-top-info">
                  <p className="projects-app-info-title">CRUD Application</p>

                  <p className="projects-app-info">
                    &bull; Library Management system <br />
                    &bull; Users search for a book by title or author <br />
                    &bull; If the book is found in the database it will be
                    displayed <br />
                    &bull; Librarians add new books into the database
                  </p>

                  <div className="tech-box">
                    <div className="tech">C#</div>{" "}
                    <div className="tech">.Net MAUI</div>{" "}
                    <div className="tech">xaml</div>{" "}
                    <div className="tech">MySql</div>{" "}
                    <div className="tech">Mariadb</div>
                  </div>
                </div>

                <div className="project-git-link-box">
                  <a
                    className="project-git-link"
                    href="https://github.com/nataliey16/LibraryOne"
                    target="blank"
                  >
                    GitHub <span className="contact-line-arrow">&#8599;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="projects__card-right">
              <div className="card-holder-right">
                <div className="projects__card__top-display-pic__box">
                  <img
                    className="projects__card__top-display-pic"
                    src={Libapp}
                    alt="libapp"
                  ></img>
                </div>

                <div className="projects__card-top-info">
                  <p className="projects-app-info-title">CRUD Application</p>

                  <p className="projects-app-info">
                    &bull; Library Management system <br />
                    &bull; Users search for a book by title or author <br />
                    &bull; If the book is found in the database it will be
                    displayed <br />
                    &bull; Librarians add new books into the database
                  </p>

                  <div className="tech-box">
                    <div className="tech">C#</div>{" "}
                    <div className="tech">.Net MAUI</div>{" "}
                    <div className="tech">xaml</div>{" "}
                    <div className="tech">MySql</div>{" "}
                    <div className="tech">Mariadb</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__right-container">
          <img
            className="projects__right-brace"
            src={rightbrace}
            alt="projects brace"
          />
        </div>
      </div>
    </div>
  );
};

export default Projectcards;
