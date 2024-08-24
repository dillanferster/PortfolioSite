import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";
import photo1 from "../../assets/portphoto1.png";

function ProjectArticleOne() {
  return (
    <main className="w-full">
      <Header title="Portfolio Site"></Header>
      <div className="max-w-[100rem] mx-auto pl-[3.5rem] mt-[12rem]  ">
        <div>
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

      <article className="pt-16 px-16 max-w-[100rem] mx-auto">
        <section>
          <div className="h-auto mx-w-full pb-4 border">
            <img src={photo1} alt="website photo" />
          </div>
          <h1 className="text-[28px] font-bold">
            A focus on alignment and proximity 
          </h1>
          <ul className="list-disc pl-4">
            <li>
              {" "}
              <p>
                After learning from multiple design iterations I decided to go
                with something more simple and to the point while keeping a
                clean aesthetic.
              </p>
            </li>
            <li>
              <p>
                My design focus was on alignment and spacing,  I wanted to show
                how powerful these fundamentals can be in creating a sleek
                modern looking site. Proper proximity keeps everything organized
                and is crucial for a user-friendly experience.
              </p>
            </li>
            <li>
              <p>
                The layout follows a 12-column grid system, ensuring everything
                is aligned to the edges, creating a structured appearance.
              </p>
            </li>
            <li>
              {" "}
              <p>
                By prioritizing alignment and spacing, the site achieves a
                clean, modern look that is both visually pleasing and easy to
                navigate.
              </p>
            </li>
          </ul>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </article>
    </main>
  );
}

export default ProjectArticleOne;
