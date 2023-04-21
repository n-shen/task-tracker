import React, { useState, useEffect } from "react";
import AddTaskForm from "../tasks/addTask";
import TaskList from "../tasks/taskLists";
import SortTasks from "./sortTasks";
import "../../styles/manager.css";
import "../../styles/addTasks.css";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useTasksContext } from "../../hooks/useTasksContext";
import axios from "axios";

const TaskManager = () => {
  // const [tasks, setTasks] = useState(
  //   JSON.parse(localStorage.getItem("tasks")) || []
  // );
  const { shared_info } = useAuthContext();
  const baseURL = shared_info.baseURL;

  const { cloud_tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();
  const [showAddTask, setShowAddTask] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      axios
        .post(
          `${baseURL}/task/fetch`,
          { taskUser: user.user },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          if (response.data["success"]) {
            dispatch({ type: "SET_TASKS", payload: response.data["tasks"] });
            console.log(response.data);
          }
        });
    };

    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);

  const handleAddTask = (task) => {
    axios
      .post(
        `${baseURL}/task/create`,
        {
          taskTitle: task.title,
          taskDescription: task.description,
          taskStatus: task.status,
          taskDeadline: task.dueDate,
          taskCategory: task.category,
          taskUser: user.user,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data["success"])
          dispatch({ type: "CREATE_TASKS", payload: response.data["task"] });
      });
    setShowAddTask(false);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...cloud_tasks];
    newTasks.splice(index, 1);
    // setTasks(newTasks);
  };

  const handleEditTask = (index, newTask) => {
    const newTasks = [...cloud_tasks];
    newTasks[index] = newTask;
    // setTasks(newTasks);
  };

  return (
    <div className="taskManager">
      <div className="taskManager--wrapper">
        <h1 className="taskManager--title">Task Manager</h1>
        <div className="taskManager--addTask">
          <div className="taskManager--addTask__btn">
            <button
              onClick={() => {
                setShowAddTask(true);
              }}
              className="addTask-btn"
            >
              Add Task
            </button>
          </div>
          <div className="taskManager--addTask__container">
            {showAddTask && (
              <AddTaskForm
                onAdd={handleAddTask}
                onHideAddTask={() => {
                  setShowAddTask(false);
                }}
              />
            )}
          </div>
        </div>
        {cloud_tasks && cloud_tasks.length > 0 && (
          <div className="taskManager--grid">
            <div className="taskManager--taskList">
              <TaskList
                tasks={cloud_tasks}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            </div>
            <div className="taskManager--sort">
              <SortTasks tasks={cloud_tasks} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
