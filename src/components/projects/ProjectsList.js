import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectsList = () => {
  // Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when component loads
  useEffect(() => {
    getProjects();
  }, []);

  // Check if projects have content
  if (projects.length === 0)
    return <p>There are no projects, start by creating one</p>;

  return (
    <ul className="projects-list">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="project">
            <Project  project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectsList;
