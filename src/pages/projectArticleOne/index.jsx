import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/portphoto2.png";
import photo3 from "../../assets/portphoto3.png";
import photo4 from "../../assets/portphoto4.png";
import photo5 from "../../assets/portphoto5.png";

function ProjectArticleOne({ burgerOpen }) {
  return (
    <main
      className={` ${
        burgerOpen ? "h-screen overflow-y-hidden" : ""
      }  w-full flex flex-col  `}
    >
      {/* <Header title="Portfolio Site"></Header> */}

      <article className="flex flex-col px-16 max-w-[100rem] mx-auto pb-[4rem] max-md:px-8 text-[var(--black)]">
        <div className="-translate-x-3 w-full mt-[6rem] pb-[4rem]">
          <a href="/projects">
            <button className="flex border rounded-2xl border-[var(--black)] p-1  justify-evenly w-[7rem] items-center text-[18px] text-[var(--black)] hover:text-[var(--text-hover)]">
              <img
                className="rotate-180 w-[35px] max-sm:w-[25px]"
                src={arrow}
                alt="back-arrow"
              />
              <p>Back</p>
            </button>
          </a>
        </div>
        <section className="pb-[8rem]">
          <div className="h-auto max-w-[70rem]  pb-4  ">
            <img src={photo1} alt="website photo" />
          </div>
          <h1 className="text-[28px] max-sm:text-[24px] font-bold underline underline-offset-8 pb-[1rem]">
            A focus on alignment and proximity
          </h1>
          <ul className="flex flex-col gap-1 max-w-[60rem]">
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
                My design focus is on alignment and spacing, I wanted to show
                how powerful these fundamentals can be in creating a sleek and
                modern looking site. Proper proximity keeps everything organized
                and is crucial for a user-friendly experience.
              </p>
            </li>
            <li>
              <p>
                The layout follows a 12-column grid system, ensuring that
                everything is aligned to the edges, creating a structured
                appearance.
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
        <section className="pb-[8rem]">
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={photo2} alt="design details" />
          </div>
          <h1 className="text-[28px]   max-sm:text-[24px] font-bold underline underline-offset-8 pb-[1rem]">
            Keeping it simple
          </h1>
          <ul className="flex flex-col gap-1 max-w-[60rem]">
            <li>
              {" "}
              <p>
                Because the design is all text, to avoid a busy appearance, I
                chose a single font across the entire site. I wanted the font
                sans-serif and modern, also bold enough to stand out as a
                heading.
              </p>
            </li>
            <li>
              <p>
                The typography includes three different font sizes and utilizes
                regular, bold, and italic styles for hierarchy.
              </p>
            </li>
            <li>
              <p>
                The site features a four-color palette, providing a balanced and
                visually appealing design.
              </p>
            </li>
            <li>
              {" "}
              <p>
                Instead of plain black or white background, I selected a soft
                sage green which contrasts beautifully with the grey/beige
                tones. I chose dark grey instead of black for the typography
                color, offering a softer look while still ensuring readability.
                A subtle purple accent adds a pop of color, complementing the
                sage green without distracting or overwhelming the design
              </p>
            </li>
          </ul>
        </section>
        <section className="pb-[8rem]">
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={photo3} alt="repetition details image" />
          </div>
          <h1 className="text-[28px]  max-sm:text-[24px] font-bold underline underline-offset-8 pb-[1rem]">
            Repetition
          </h1>
          <ul className="flex flex-col gap-1 max-w-[60rem]">
            <li>
              {" "}
              <p>
                The same colors, line widths, shapes, and overall theme are
                repeatedly applied throughout the site for a unified look.
              </p>
            </li>
            <li>
              <p>
                I used an oval outline over elements, such as “software” and the
                projects button, to highlight the most important parts of the
                page. With the outline I wanted to add a bit of style but also
                have it be useful when the users looks at the page.
              </p>
            </li>
            <li>
              <p>
                A bar at the bottom of the page draws attention to the project
                call-to-action button, and breaks up the solid color of the
                background. The bar is also repeated on other pages as a
                subheading for consistency.
              </p>
            </li>
            <li>
              {" "}
              <p>
                The purple accent color is used on all clickable arrow buttons,
                providing easy and familiar navigation for the user.
              </p>
            </li>
          </ul>
        </section>
        <section className="pb-[8rem]">
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={photo4} alt="repetition details image" />
          </div>
          <h1 className="text-[28px]  max-sm:text-[24px] font-bold underline underline-offset-8 pb-[1rem]">
            Responsiveness
          </h1>
          <ul className="flex flex-col gap-1 max-w-[60rem]">
            <li>
              {" "}
              <p>
                The site is fully responsive, as users are interacting with
                sites on many different devices. It accommodates different
                screen sizes including mobile browsers ensuring functionality
                and appearance stay consistent.
              </p>
            </li>
            <li>
              <p>
                I created the hamburger menu from scratch, including the button
                animation, without using any pre-made UI components. As the menu
                overlays the main content it blurs the background this was
                inspired by glassmorphism design styles. I think it looks really
                cool and you can still see what page you are on underneath.
              </p>
            </li>
            <li>
              <p>
                My hamburger menu replaces the regular navigation on smaller
                screens, under 1000px. This is standard for mobile sizes and
                allows for the nav bar to be smaller but still be easy to use
                with a overlaying menu, offering a compact and user-friendly
                navigation
              </p>
            </li>
          </ul>
        </section>
        <section className="pb-[4rem]">
          <div className="h-auto max-w-[60rem]  pb-8  ">
            <img src={photo5} alt="code details image" />
          </div>
          <h1 className="text-[28px]  max-sm:text-[24px] font-bold underline underline-offset-8 pb-[1rem]">
            The code
          </h1>
          <ul className="flex flex-col gap-1 max-w-[60rem]">
            <li>
              {" "}
              <p>
                I made sure to be using all of the correct tags for my html ,
                this is important to maintain consistency and have clean
                readable code also for accessibility like how my nav bar items
                are in a list so they can be tabbed through for selection. 
              </p>
            </li>
            <li>
              <p>
                Since I have multiple projects on my projects page list I
                decided to make a projectItem component. I did this so I could
                reuse the main portion of the code and pass different properties
                into the component. I created a project object list on the
                projects page, I can map through each of the object's properties
                and pass them into the projectItem component. This is great
                because now I have multiple projects in my list but I only had
                to make one component!
              </p>
            </li>
          </ul>
        </section>
        <section>
          <p className="pb-[1rem]">Thanks for reading !</p>

          <p className="underline">
            <a
              href="https://github.com/dillanferster/PortfolioSite.git"
              target="blank"
            >
              Github
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}

export default ProjectArticleOne;
