import React from "react";
import Header from "../../components/header";
import ProjectItem from "../../components/projectItem";

function ProjectsPage() {
  return (
    <main className="w-full">
      <Header title="What im working on"></Header>
      <div className="pt-32">
        <ul>
          <li>
            <ProjectItem project="Portfolio Site"></ProjectItem>
          </li>
          <li>
            <ProjectItem project="YYC Flight Deals"></ProjectItem>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ProjectsPage;
