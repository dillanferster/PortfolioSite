import React from "react";
import Header from "../../components/header";
import ProjectItem from "../../components/projectItem";
import { motion } from "framer-motion";
import { useState } from "react";

// project objects//
const ProjectList = [
  {
    projectName: "Portfolio Site",
    path: "/ProjectArticleOne",
    tag: "#Website",
    desc: "A dive into the site you are currently on",
    id: "00",
  },
  {
    projectName: "YYC Flight Deals",
    path: "/ProjectArticleTwo",
    tag: "#WebApp",
    desc: "Displays cheap flights out of Calgary  ",
    id: "01",
  },
];
///
const GraphicList = [
  {
    projectName: "Graphic Art",
    path: "/GraphicArticleOne",

    id: "00",
  },
  {
    projectName: "Music Posters",
    path: "/GraphicArticleTwo",

    id: "01",
  },
  {
    projectName: "Events",
    path: "/EventArticle",

    id: "02",
  },
  {
    projectName: "Logo Design",
    path: "/LogoArticle",

    id: "03",
  },
  {
    projectName: "Apparel Graphics",
    path: "/ApparelArticle",

    id: "04",
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

const SelectButton = ({ activeTab, setActiveTab, burgerOpen }) => {
  return (
    <div className="flex gap-4 mb-8 justify-center">
      <button
        className={`px-3 py-2 rounded-full border-2 border-[var(--black)]  ${
          activeTab === "design"
            ? "bg-[var(--black)] text-white"
            : "text-[var(--black)]"
        }`}
        onClick={() => setActiveTab("design")}
      >
        Graphic Design
      </button>
      <button
        className={`px-8 py-2 rounded-full border-2 border-[var(--black)] ${
          activeTab === "development"
            ? "bg-[var(--black)] text-white"
            : "text-[var(--black)]"
        }`}
        onClick={() => setActiveTab("development")}
      >
        Web Dev
      </button>
    </div>
  );
};

function ProjectsPage({ burgerOpen }) {
  const [activeTab, setActiveTab] = useState("design");

  return (
    <main className="w-full">
      <Header title="What im working on"></Header>
      <div
        className={`pt-[8rem] max-sm:pt-[6rem] px-[2rem] ${
          burgerOpen ? "h-screen overflow-y-hidden" : ""
        } `}
      >
        <SelectButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          burgerOpen={burgerOpen}
        />
        {activeTab === "development" && (
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
        )}
        {activeTab === "design" && (
          <motion.ul variants={container} initial="hidden" animate="show">
            {GraphicList.map(function (item) {
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
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
