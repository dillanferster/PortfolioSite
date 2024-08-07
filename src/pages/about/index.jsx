import React from "react";
import Header from "../../components/header";

function AboutPage() {
  return (
    <main>
      <Header title="Get to know me"></Header>
      <div className="flex justify-between gap-16 text-[var(--black)] px-16 max-w-[100rem] mx-auto ">
        <section>
          <div className="w-[10rem] h-[10rem] border"></div>
        </section>
        <section className="flex flex-col gap-8 pt-16">
          <article>
            <h3 className="font-bold text-[18px]">About me</h3>
            <p className="pb-4">
              Hi, my name is Dillan Ferster, I’m a designer and developer. I
              love to make designs and build them into functional and
              user-friendly experiences. Before getting into software
              development my background involved problem solving and design in
              the areas of refrigeration as a HVAC/R technician and freelancing
              in graphic design. Combining my experience in those fields, I
              found my passion in programming, where I can design, build and
              bring systems and interfaces to life, this is what I love most
              about my work.
            </p>
            <p>
              {" "}
              When I'm not working, you can find me creating digital art or
              staying active at the gym. I also love spending time outdoors. In
              the summer, I enjoy hiking in the mountains, and in the winter I
              love to snowboard.
            </p>
          </article>{" "}
          <article>
            <h3 className="font-bold text-[18px]">Education</h3>
            <p>
              I attended the Southern Alberta Institute of Technology (SAIT) and
              received a diploma in the software development program. There, we
              learned many software development skills such as networking,
              critical thinking, and programming. We covered different OOP
              languages such as Java and C#, and learnt the fundamentals of data
              structures and algorithms. I enjoyed building a desktop CRUD
              application using C# with .Net MAUI, and most of all I found an
              interest in web design and frontend software development.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
