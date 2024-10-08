import React from "react";
import Header from "../../components/header";
import ProjectItem from "../../components/projectItem";
import { motion } from "framer-motion";

function ProjectsPage({ burgerOpen }) {
  // project objects//
  const ProjectList = [
    {
      projectName: "Portfolio Site",
      path: "/ProjectArticleOne",
      tag: "Website",
      desc: "A dive into the site you are currently on",
      id: "00",
    },
    {
      projectName: "YYC Flight Deals",
      path: "/ProjectArticleTwo",
      tag: "Web app",
      desc: "Displays cheap flights out of Calgary  ",
      id: "01",
    },
    {
      projectName: "Library book management",
      path: "/ProjectArticleTwo",
      tag: "Crud app",
      desc: "C# .Net & Sql",
      id: "02",
    },
    {
      projectName: "Mountain weather",
      tag: "Mobile app",
      path: "/ProjectArticleFour",
      desc: "Ski mountain weather",
      id: "03",
    },
  ];
  ///

  // varibles for framer motion //
  const container = {
    show: {
      transition: {
        staggerChildren: 0.18,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: -5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  //

  return (
    <main className="w-full">
      <Header title="What im working on"></Header>
      <div
        className={`pt-[8rem] max-sm:pt-[6rem] px-[2rem] ${
          burgerOpen ? "h-screen overflow-y-hidden" : ""
        } `}
      >
        <motion.ul variants={container} initial="hidden" animate="show">
          {ProjectList.map(function (item) {
            return (
              <a href={item.path}>
                <motion.li key={item.id} variants={listItem}>
                  <ProjectItem
                    id={item.id}
                    tag={item.tag}
                    project={item.projectName}
                    desc={item.desc}
                  ></ProjectItem>
                </motion.li>
              </a>
            );
          })}
        </motion.ul>
      </div>
    </main>
  );
}

export default ProjectsPage;
