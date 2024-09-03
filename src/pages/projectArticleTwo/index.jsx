import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";
import flight1 from "../../assets/flightphoto1.png";
import flight2 from "../../assets/flightphoto2.png";
import flight3 from "../../assets/flightphoto3.png";
import flight4 from "../../assets/flightphoto4.png";
import flight5 from "../../assets/flightphoto5.png";

function ProjectArticleTwo({ burgerOpen }) {
  return (
    <main
      className={` ${
        burgerOpen ? "h-screen overflow-y-hidden" : ""
      }  w-full flex flex-col  `}
    >
      <Header title="YYC flight deals"></Header>

      <article className="flex flex-col px-16 max-w-[100rem] mx-auto pb-[4rem] max-md:px-8 text-[var(--black)]">
        <div className="-translate-x-3 w-full mt-[12rem] pb-[2rem] ">
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
        <section className="pb-[8rem]">
          <div className="h-auto max-w-[70rem]  pb-4  ">
            <img src={flight1} alt="website photo" />
          </div>
          <h1 className="text-[28px] font-bold underline underline-offset-8 pb-[1rem]">
            The Idea
          </h1>
          <ul className="flex flex-col gap-1 max-w-[60rem]">
            <li>
              {" "}
              <p>
                Have you ever felt the urge to travel but struggled to decide on
                a destination? That's exactly where this app comes in! created
                from the desire to explore new places, it takes the stress out
                of searching and decision-making. How fun is that?
              </p>
            </li>
            <li>
              <p>
                What sets this app apart is its intentional lack of a search
                function. Instead, it focuses solely on showcasing the most
                popular and affordable direct flights departing from Calgary. By
                eliminating so many choices, it makes travel planning quick, fun
                and simple.
              </p>
            </li>
          </ul>
        </section>
        <section className="pb-[8rem]">
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={flight2} alt="design details" />
          </div>
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={flight3} alt="design details" />
          </div>
          <h1 className="text-[28px] font-bold underline underline-offset-8 pb-[1rem]">
            The Design
          </h1>
          <ul className="flex flex-col gap-2 max-w-[60rem]">
            <li>
              <h2 className="text-[18px] font-semibold">Grid</h2>
              <p>
                I set out to showcase how great images can look when arranged in
                a grid layout. The design is all about consistency and
                simplicity. Every line in the grid shares the same width,
                creating a clean, uniform appearance. The entire grid aligns
                perfectly with the navigation bar, ensuring a cohesive look
                across the page. To tie it all together, I made sure the hover
                effects on the image boxes mirror the style of the navigation
                bar. This repetition of design elements creates a unified user
                experience throughout the app.
              </p>
            </li>
            <li>
              <h2 className="text-[18px] font-semibold">Call to action</h2>
              <p>
                Drawing attention where it matters most is crucial in web
                design. That's why I implemented a bold, eye-catching
                call-to-action typography that instantly grabs the user's focus.
                This text guides users directly to a container showcasing the
                first featured flight. By emphasizing this initial offering, we
                create an immediate point of interest that's hard to miss. I
                also wanted to add a playful touch! The "so why not go"
                typography adds a sense of fun and spontaneity into the design.
                The visuals and copy together keeps the overall theme of the app
                enjoyable and inviting, encouraging users to take that first
                step towards their next adventure
              </p>
            </li>
            <li>
              <h2 className="text-[18px] font-semibold">From scratch</h2>
              <p>
                That's right no pre-made components were used in the making of
                this site. Every button, card, grid layout, and interactive
                element you see is the result of custom CSS. I gained invaluable
                hands-on experience and a deeper understanding of CSS. Plus, it
                gave me the freedom to fine-tune every detail, creating a user
                interface that stands out from cookie-cutter designs.
              </p>
            </li>
          </ul>
        </section>
        <section className="pb-[5rem]">
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={flight4} alt="repetition details image" />
          </div>
          <div className="h-auto max-w-[60rem]  pb-4  ">
            <img src={flight5} alt="repetition details image" />
          </div>
          <h1 className="text-[28px] font-bold underline underline-offset-8 pb-[1rem]">
            The Tech
          </h1>
          <ul className="flex flex-col gap-2 max-w-[60rem]">
            <li>
              <h2 className="text-[18px] font-semibold"> Getting the data</h2>
              <p>
                I used React's fetch API to make three different API calls,
                ensuring all data including flights and photos is live and
                dynamic, changing based on the selected city. One crucial lesson
                I learned was the importance of data loading checks. To prevent
                rendering issues, I implemented checks to ensure components only
                render once the data is fully loaded.
              </p>
            </li>
            <li>
              <h2 className="text-[18px] font-semibold"> Using the data</h2>
              <div>
                <ol className="list-decimal list-inside pl-2">
                  <li>
                    {" "}
                    Flight Information: The primary API call returns an object
                    with the airport code, price, and other flight details.
                    However, it doesn't provide the city name. To solve this, I
                    made a second API call to fetch a list of cities and their
                    corresponding airport codes.
                  </li>
                  <li>
                    City Name Lookup: I created a key-value pair object using
                    the city and airport code data. This allows me to quickly
                    look up and display the correct city name based on the
                    airport code returned by the flight API.
                  </li>
                  <li>
                    Dynamic Photos: For the images, I pass the retrieved city
                    name to the Pexels API. This fetches relevant photos for
                    each destination.
                  </li>
                </ol>
              </div>
            </li>
            <li>
              <h2 className="text-[18px] font-semibold">
                Conditional rendering
              </h2>
              <p>
                Before the flight data arrives, users see a blank loading
                element. Once the data is fetched, it transitions to show the
                full flight detail box. This approach ensures a smooth user
                experience even during loading times.
              </p>
            </li>
            <li>
              <h2 className="text-[18px] font-semibold">Mapping</h2>
              <p>
                By storing all data in an array and using the map function, I
                can dynamically add data into each detail box component for each
                flight. This use of component mapping allowed me to reuse a
                single component multiple times, making for a more efficient
                process.
              </p>
            </li>
            <li>
              <h2 className="text-[18px] font-semibold">
                useState & useEffect
              </h2>
              <div>
                <ol className="list-decimal list-inside pl-2">
                  <li>
                    {" "}
                    useEffect: This hook was important for handling my API
                    calls. By using useEffect, I ensure that fetch data
                    functions are called each time the flight detail boxes are
                    rendered on page load.
                  </li>
                  <li>
                    useState: All the data returned from the API calls is stored
                    in useState hooks. I did this so the new flight data can
                    update everywhere it is being used in the app, ensuring all
                    the components are using the most relevant data.
                  </li>
                </ol>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <p className="pb-[1rem]">Thanks for reading !</p>
          <div className="flex flex-col gap-2">
            <p className="underline">
              <a href="https://yyc-flight-deals.vercel.app/" target="blank">
                Website
              </a>
            </p>
            <p className="underline">
              <a
                href="https://github.com/dillanferster/YYCFlightDeals.git"
                target="blank"
              >
                Github
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ProjectArticleTwo;
