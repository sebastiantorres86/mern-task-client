import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get function from task context
  const tasksContext = useContext(taskContext);
  const { addTask, validateTask, taskError, getTasks } = tasksContext;

  // Form state
  const [task, setTask] = useState({
    name: "",
  });

  // Extract project name
  const { name } = task;

  // If there is no project selected
  if (!project) return null;

  // Array destructuring to get the current state
  const [actualProject] = project;

  // Read form values
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (name.trim() === "") {
      validateTask();
      return;
    }

    // Add a new task to the task state
    task.projectId = actualProject.id;
    task.state = false;
    addTask(task);

    //Get and filter the tasks in the current project
    getTasks(actualProject.id)

    // reset the form
    setTask({
      name: ''
    })
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value="Add task"
          />
        </div>
      </form>

      {taskError ? (
        <p className="message error">The name of the task is required</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
