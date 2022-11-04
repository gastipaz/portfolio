import React from "react";
import { PageContainer, PageWrapper } from "../pages_elements/PageElements";
import ProjectSection from "./ProjectSection";
import {ProjectsData as projects} from "./data/ProjectsData"

function Projects() {
  return (
    <PageContainer id="projects">
      <PageWrapper>
        {projects.map(project => 
          <ProjectSection key={project.id} project={project} />
        )}
      </PageWrapper>
    </PageContainer>
  );
}

export default Projects;