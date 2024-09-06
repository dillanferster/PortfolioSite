import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";
import flight1 from "../../assets/flightphoto1.png";
import flight2 from "../../assets/flightphoto2.png";
import flight3 from "../../assets/flightphoto3.png";
import flight4 from "../../assets/flightphoto4.png";
import flight5 from "../../assets/flightphoto5.png";
import detailcard from "../../assets/detailcard.png";
import plane from "../../assets/plane.png";

function ProjectArticleTwo({ burgerOpen }) {
  return (
    <main
      className={` ${
        burgerOpen ? "h-screen overflow-y-hidden" : ""
      }  w-full flex flex-col  `}
    >
      {/* <Header title="YYC flight deals"></Header> */}

      <article className="flex flex-col px-16 max-w-[100rem] mx-auto pb-[4rem] max-md:px-2 text-[var(--black)] ">
        <div className="  mt-[8rem] pb-[4rem] max-md:px-[4rem]  max-sm:px-6">
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

        <section id="the-concept" className="pb-[12rem] mt-[2rem] ">
          <div className=" flex justify-between items-center max-lg:justify-center max-lg:flex-col">
            <div className=" flex flex-col max-sm:pb-[2rem]">
              <h2 className="flex text-[48px] font-bold max-sm:text-[28px] max-lg:justify-center">
                <span className="text-[var(--green)]">YYC </span> Flight Deals
              </h2>
              <p className="w-[30rem] pt-[4rem] text-[18px] max-sm:text-[16px]  max-sm:w-[20rem]  max-sm:text-center">
                This idea come out of wanting to go somewhere but not knowing
                exactly where you want to go ! it takes the searching and
                thinking out of the decision , how fun right ?  this app has no
                search on purpose it only shows the most popular cheap direct
                flights out of calgary .
              </p>
            </div>
            <div className=" w-[25rem]  max-sm:w-[18rem]">
              <img className=" h-auto " src={plane} alt="air plane graphic" />
            </div>
          </div>
        </section>
        <section className="pb-[15rem] ">
          <div className="flex flex-col gap-[2rem] justify-center items-center">
            <div className="flex text-wrap  p-[1rem] max-w-[70rem] px-8 max-sm:px-1 text-center w-full rounded-2xl border border-[var(--black)]">
              <p className="flex text-[var(--beige)] text-[18px] max-sm:text-[16px]  text-wrap">
                What sets this app apart is its intentional lack of a search
                function. Instead, it focuses solely on showcasing the most
                popular and affordable direct flights departing from Calgary. By
                eliminating so many choices, it makes travel planning quick, fun
                and simple.
              </p>
            </div>
            <div className="h-auto max-w-[70rem] ">
              <img
                className=" rounded-3xl border border-[var(--black)] shadow-md  "
                src={flight1}
                alt="main page picture"
              />
            </div>
          </div>
        </section>
        <section className="pb-[15rem] ">
          <div className="flex flex-col max-w-[70rem] mx-auto ">
            <div className="flex justify-between  gap-2 max-lg:items-center max-lg:flex-col ">
              <div className="flex ">
                <h2 className="text-[28px] font-bold  text-start max-lg:text-center">
                  The <span className="text-[var(--blue)]">Design</span>
                </h2>
              </div>
              <div className="w-[20rem]  p-[1.5rem]   max-lg:w-full  ">
                {" "}
                <p className="text-[18px] max-sm:text-[16px]  text-[var(--black)] max-sm:text-center ">
                  I set out to showcase how great images can look when arranged
                  in a grid layout. The design is all about consistency and
                  simplicity. Every line in the grid shares the same width,
                  creating a clean, uniform appearance. The entire grid aligns
                  perfectly with the navigation bar, ensuring a cohesive look
                  across the page. To tie it all together, I made sure the hover
                  effects on the image boxes mirror the style of the navigation
                  bar. This repetition of design elements creates a unified user
                  experience throughout the app.
                </p>
              </div>
              <div className="w-[20rem] p-[1.5rem] max-lg:w-full  ">
                {" "}
                <p className="text-[18px]  max-sm:text-[16px]  text-[var(--black)] max-sm:text-center">
                  By emphasizing this initial offering, we create an immediate
                  point of interest that's hard to miss. I also wanted to add a
                  playful touch! The "so why not go" typography adds a sense of
                  fun and spontaneity into the design. The visuals and copy
                  together keeps the overall theme of the app enjoyable and
                  inviting, encouraging users to take that first step towards
                  their next adventure.
                </p>
              </div>
            </div>
            <div className="h-auto max-w-[70rem]  mt-[4rem]  ">
              <img
                className="rounded-3xl border border-[var(--black)] shadow-md "
                src={flight2}
                alt="main page picture"
              />
            </div>
          </div>
        </section>
        <section className="pb-[15rem] ">
          <div className=" flex max-w-[70rem] items-center justify-between max-lg:flex-col max-lg:items-center">
            <div className=" flex flex-col  max-lg:items-center">
              <h2 className="text-[28px] font-bold">
                From <span className="text-[var(--yellow)]">Scratch</span>
              </h2>
              <p className="w-[30rem] pt-[4rem] text-[18px] max-sm:text-[16px] max-lg:text-center max-md:w-[20rem] max-md:pt-[2rem]">
                That's right no pre-made components were used in the making of
                this site. Every button, card, grid layout, and interactive
                element you see is the result of custom CSS. I gained invaluable
                hands-on experience and a deeper understanding of CSS. Plus, it
                gave me the freedom to fine-tune every detail, creating a user
                interface that stands out from cookie-cutter designs.
              </p>
            </div>
            <div className="h-auto w-[30rem]  max-sm:w-[23rem] max-lg:mt-[2rem]">
              <img
                className=" border border-[var(--black)] rounded-2xl bg-[var(--card)] shadow-md "
                src={detailcard}
                alt="detail card"
              />
            </div>
          </div>
        </section>
        <section className="pb-[2rem] ">
          <div className=" flex flex-col  justify-center items-center">
            <div>
              <h2 className="text-[28px] font-bold">
                The <span className="text-[var(--red)]">Tech</span>
              </h2>
            </div>
            <div className=" flex flex-col gap-8 p-8 max-w-[70rem] justify-between max-lg:justify-center border border-[var(--black)] rounded-3xl bg-[var(--card)] mt-4 max-sm:p-4">
              <div className="h-auto ">
                <img
                  className="  border border-[var(--black)] rounded-2xl bg-[var(--card)] shadow-md "
                  src={flight4}
                  alt="detail card"
                />
              </div>
              <div className=" flex flex-col ">
                <h3 className="text-[18px] font-bold">Getting the data</h3>
                <p className="pt-[1rem] text-[18px]  max-sm:text-[16px] text-[var(--beige)]">
                  I used React's fetch API to make three different API calls,
                  ensuring all data including flights and photos is live and
                  dynamic, changing based on the selected city. One crucial
                  lesson I learned was the importance of data loading checks. To
                  prevent rendering issues, I implemented checks to ensure
                  components only render once the data is fully loaded.
                </p>
              </div>
              <div className=" flex flex-col ">
                <h3 className="text-[18px] font-bold">Using the data</h3>
                <p className=" pt-[1rem] text-[18px]  max-sm:text-[16px] text-[var(--beige)]">
                  The primary API call returns an object with the airport code,
                  price, and other flight details. However, it doesn't provide
                  the city name. To solve this, I made a second API call to
                  fetch a list of cities and their corresponding airport codes.
                  City Name Lookup: I created a key-value pair object using the
                  city and airport code data. This allows me to quickly look up
                  and display the correct city name based on the airport code
                  returned by the flight API. Dynamic Photos: For the images, I
                  pass the retrieved city name to the Pexels API. This fetches
                  relevant photos for each destination.
                </p>
              </div>

              <div className="h-auto ">
                <img
                  className=" h-auto border border-[var(--black)] rounded-2xl bg-[var(--card)] shadow-md "
                  src={flight5}
                  alt="detail card"
                />
              </div>

              <div className=" flex flex-col ">
                <h3 className="text-[18px] font-bold">Conditional Rendering</h3>
                <p className=" pt-[1rem] text-[18px]  max-sm:text-[16px] text-[var(--beige)]">
                  Before the flight data arrives, users see a blank loading
                  element. Once the data is fetched, it transitions to show the
                  full flight detail box. This approach ensures a smooth user
                  experience even during loading times.
                </p>
              </div>
              <div className=" flex flex-col ">
                <h3 className="text-[18px] font-bold">Mapping</h3>
                <p className=" pt-[1rem] text-[18px]  max-sm:text-[16px] text-[var(--beige)]">
                  By storing all data in an array and using the map function, I
                  can dynamically add data into each detail box component for
                  each flight. This use of component mapping allowed me to reuse
                  a single component multiple times, making for a more efficient
                  process.
                </p>
              </div>
              <div className=" flex flex-col ">
                <h3 className="text-[18px] font-bold">useState & useEffect</h3>
                <p className=" pt-[1rem] text-[18px]  max-sm:text-[16px] text-[var(--beige)]">
                  useState: All the data returned from the API calls is stored
                  in useState hooks. I did this so the new flight data can
                  update everywhere it is being used in the app, ensuring all
                  the components are using the most relevant data.
                </p>
                <p className=" pt-[1rem] text-[18px]  max-sm:text-[16px] text-[var(--beige)]">
                  useEffect: This hook was important for handling my API calls.
                  By using useEffect, I ensure that fetch data functions are
                  called each time the flight detail boxes are rendered on page
                  load.
                </p>
              </div>
              <div className="flex gap-2 max-sm:flex max-sm:justify-between">
                <div>
                  <a href="https://yyc-flight-deals.vercel.app/" target="blank">
                    <button className="flex border rounded-2xl border-[var(--black)] p-1  justify-evenly w-[9rem] items-center text-[18px] bg-[var(--bg)] text-[var(--black)] hover:text-[var(--text-hover)]">
                      <p>Go to app</p>
                      <img
                        className="w-[35px] -rotate-45 max-sm:w-[25px]"
                        src={arrow}
                        alt="app-arrow"
                      />
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/dillanferster/YYCFlightDeals.git"
                    target="blank"
                  >
                    <button className="flex border rounded-2xl border-[var(--black)] p-1  justify-evenly w-[9rem] items-center text-[18px] bg-[var(--bg)] text-[var(--black)] hover:text-[var(--text-hover)]">
                      <p>Github</p>
                      <img
                        className="w-[35px] -rotate-45 max-sm:w-[25px]"
                        src={arrow}
                        alt="app-arrow"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ProjectArticleTwo;
