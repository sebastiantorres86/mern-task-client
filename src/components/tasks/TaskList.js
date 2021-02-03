import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
  // Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Get project tasks
  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  // If there is no project selected
  if (!project) return <h2>Select a project</h2>;

  // Array destructuring to get the current state
  const [actualProject] = project;

  // Delete a project
  const onClickDelete = () => {
    deleteProject(actualProject.id);
  };
  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>

      <ul className="task-list">
        {tasksProject.length === 0 ? (
          <li className="task">
            <p>No pending tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((task) => (
              <CSSTransition key={task.id} timeout={200}
              classNames="task">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button type="button" className="btn btn-delete" onClick={onClickDelete}>
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
