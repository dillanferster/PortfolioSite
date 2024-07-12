import React from "react";
import arrow from "../../assets/arrow.svg";
import "./styles.css";

function Contact() {
  return (
    <div className="flex justify-center items-center text-[32px] text-[var(--black)]">
      <div>
        <ul className="flex flex-col gap-8">
          <li>
            <a
              href="https://www.linkedin.com/in/dillan-ferster

"
              target="blank"
            >
              <button
                id="contactbtn-one"
                className="hover:text-[var(--text-hover)] "
              >
                <div className="flex w-[12rem] justify-between">
                  <p>Linkedin</p>

                  <div id="contact-arrow-one" className="flex items-center">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <hr className=" border-[var(--black)] w-[12rem]" />
              </button>
            </a>
          </li>

          <li>
            <a href="https://github.com/dillanferster" target="blank">
              <button
                id="contactbtn-two"
                className="hover:text-[var(--text-hover)] "
              >
                <div className="flex w-[12rem] justify-between">
                  <p>Github</p>

                  <div id="contact-arrow-two" className="flex items-center">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <hr className=" border-[var(--black)] w-[12rem]" />
              </button>{" "}
            </a>
          </li>
          <li>
            <a href="mailto:dillyferster@gmail.com" target="blank">
              <button
                id="contactbtn-three"
                className="hover:text-[var(--text-hover)] "
              >
                <div className="flex w-[12rem] justify-between">
                  <p>Email</p>

                  <div id="contact-arrow-three" className="flex items-center">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <hr className=" border-[var(--black)] w-[12rem]" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
