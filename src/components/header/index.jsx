import React from "react";
import star from "../../assets/star.svg";

function Header({ title }) {
  return (
    <div className="w-full bg-[var(--beige)] h-[4rem]">
      <div className="flex justify-start gap-4  px-[4rem] py-1.5 items-center align-middle text-[var(--black)] max-w-[100rem] mx-auto text-[28px] ">
        <div>
          <h1> {title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
