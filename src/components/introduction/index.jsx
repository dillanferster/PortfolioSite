import React from "react";

function Introduction() {
  return (
    <div className="text-[var(--black)] pt-4">
      <div
        id="intro-name"
        className="text-[40px] font-semibold text-[var(--beige)]"
      >
        <h1>Hi my name is Dillan,</h1>
      </div>

      <div id="intro-about" className="w-[30rem] text-[18px]">
        <p>
          im a <span className="font-bold">designer</span> and{" "}
          <span className="font-bold">developer</span>. I love to make designs
          that look amazing and build them into a functional and user friendly
          interface.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
