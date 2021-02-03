import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Virtual Store" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Web Site Design" },
    { id: 4, name: "MERN" },
  ];

  const initialState = {
    projects: [],
    form: false,
    formError: false,
    project: null,
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Function series for the CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  // Get the projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  // Add new project
  const addProject = (project) => {
    project.id = uuidv4();

    // Insert the project in the state
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // Validate form for errors
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  // Select the project that the user clicks
  const actualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };

  // Delete a project
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        formError: state.formError,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
