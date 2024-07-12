import React from "react";
import star from "../../assets/star.svg";

function Header({ title }) {
  return (
    <div className="w-full bg-[var(--beige)]">
      <div className="flex justify-start gap-4  px-[3.25rem] py-1.5 items-center align-middle text-[var(--black)] max-w-[80rem] mx-auto text-[32px] ">
        <div className="flex flex-col justify-center items-center w-[3rem] translate-y-2">
          <img src={star} alt="star"></img>
        </div>
        <div>
          <h1> {title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
