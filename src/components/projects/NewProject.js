import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Get the state of the form
  const projectsContext = useContext(projectContext);
  const { form, formError, showForm, addProject, showError } = projectsContext;

  // State for Project
  const [project, setProject] = useState({
    name: "",
  });

  // Extract project name
  const { name } = project;

  // Read the contents of the input
  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // When user submits a project
  const onSubmitProject = (e) => {
    e.preventDefault();

    // Validate the project
    if (name === "") {
      showError();
      return;
    }

    // Add to state
    addProject(project);

    // Restart the form
    setProject({
      name: "",
    });
  };

  // Show the form
  const onClickForm = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onClickForm}
      >
        New Project
      </button>

      {form ? (
        <form className="form-new-project" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Add new project"
          />
        </form>
      ) : null}

      {formError ? (
        <p className="message error">Project name is required</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
