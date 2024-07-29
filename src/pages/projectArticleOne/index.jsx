import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";

function ProjectArticleOne() {
  return (
    <main className="w-full">
      <Header title="Portfolio Site"></Header>
      <div className="max-w-[100rem] mx-auto pl-[4rem]">
        <div className="pt-16  ">
          <a href="/projects">
            <button className="flex justify-center w-[6rem] items-center text-[18px] text-[var(--black)] hover:text-[var(--text-hover)]">
              <img
                className="rotate-180 pl-2 w-[35px]"
                src={arrow}
                alt="back-arrow"
              />
              <p>Back</p>
            </button>
          </a>
        </div>
      </div>

      <article>
        <div></div>
      </article>
    </main>
  );
}

export default ProjectArticleOne;
