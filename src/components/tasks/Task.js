import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get function from task context
  const tasksContext = useContext(taskContext);
  const {
    deleteTask,
    getTasks,
    changeStatusTask,
    saveActualTask,
  } = tasksContext;

  // Extract the project
  const [actualProject] = project;

  // Function that runs when the user presses the delete task button
  const taskDelete = (id) => {
    deleteTask(id);
    getTasks(actualProject.id);
  };

  // Function that modifies the status of tasks
  const changeStatus = (task) => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }
    changeStatusTask(task);
  };

  // Add a current task when the user wants to edit it
  const selectTask = (task) => {
    saveActualTask(task);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        {task.state ? (
          <button
            type="button"
            className="complete"
            onClick={() => changeStatus(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incomplete"
            onClick={() => changeStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secundary"
          onClick={() => taskDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
