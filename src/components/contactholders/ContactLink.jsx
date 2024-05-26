import React from "react";

const ContactLink = ({ link }) => {
  return (
    <div className="flex flex-col  items-center  px-4">
      <div
        id="linkedinBox"
        className=" w-[80%] max-w-[45rem] flex flex-col items-center  text-[4em] font-Armata  overflow-hidden max-sm:text-[3rem]"
      >
        <div className="flex w-[20rem] justify-start max-sm:w-[15rem] ">
          {link}
          <div className=" flex flex-col justify-center text-[var(--color-purple)] text-[3rem]">
            &#8599;
          </div>
        </div>

        <div className=" w-[80%] max-w-[45rem] absolute translate-y-[6rem] overflow-hidden">
          <hr
            id="linkedinLineHover"
            className=" border-[var(--color-green)] "
          ></hr>
        </div>
      </div>

      <hr
        id="linkedinLine"
        className="w-[80%] max-w-[45rem]  border-gray-700 transition-colors mb-8"
      ></hr>
    </div>
  );
};

export default ContactLink;
