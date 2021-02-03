import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  ACTUAL_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose Platform", state: true, projectId: 1 },
      { id: 2, name: "Choose Colors", state: false, projectId: 2 },
      { id: 3, name: "Choose Pay Platform", state: false, projectId: 3 },
      { id: 4, name: "Choose Hosting", state: true, projectId: 4 },
      { id: 5, name: "Choose Platform", state: true, projectId: 1 },
      { id: 6, name: "Choose Colors", state: false, projectId: 2 },
      { id: 7, name: "Choose Pay Platform", state: false, projectId: 3 },
      { id: 8, name: "Choose Hosting", state: true, projectId: 4 },
      { id: 9, name: "Choose Platform", state: true, projectId: 4 },
      { id: 10, name: "Choose Colors", state: false, projectId: 1 },
      { id: 11, name: "Choose Pay Platform", state: false, projectId: 2 },
      { id: 12, name: "Choose Hosting", state: true, projectId: 3 },
      { id: 13, name: "Choose Platform", state: true, projectId: 2 },
      { id: 14, name: "Choose Colors", state: false, projectId: 3 },
      { id: 15, name: "Choose Pay Platform", state: false, projectId: 4 },
      { id: 16, name: "Choose Hosting", state: true, projectId: 3 },
    ],
    tasksProject: null,
    taskError: false,
    selectedTask: null,
  };

  // Create dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Create the functions

  // Get tasks for a project
  const getTasks = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  // Add a task to the selected project
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  // Validate and show an error if necessary
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  // Delete tasks by Id
  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  // Change the status of each task
  const changeStatusTask = (task) => {
    dispatch({
      type: TASK_STATUS,
      payload: task,
    });
  };

  // Extract a task for editing
  const saveActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        task: state.tasks,
        tasksProject: state.tasksProject,
        taskError: state.taskError,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStatusTask,
        saveActualTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
