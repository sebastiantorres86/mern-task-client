import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  // Get the state of projects
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // Get function from task context
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  // Function to add current project
  const selectProject = (id) => {
    actualProject(id);
    getTasks(id)
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
