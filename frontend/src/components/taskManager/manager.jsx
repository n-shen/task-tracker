import React, { useState, useEffect } from "react";
import AddTaskForm from "../tasks/addTask";
import TaskList from "../tasks/taskLists";
import SortTasks from "./sortTasks";
import ViewByCategory from "./viewByCategory";
import CategoryTask from "./categoryTasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  const { tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();
  const [showAddTask, setShowAddTask] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      axios
        .get(`${baseURL}/task/all`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          if (response.data["success"]) {
            console.log(response.data["tasks"]);
            dispatch({ type: "SET_TASK", payload: response.data["tasks"] });
          }
        });
    };

    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);

  const handleAddTask = (task) => {
    console.log("adding task:", task, user);
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
      });
    setShowAddTask(false);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    // setTasks(newTasks);
  };

  const handleEditTask = (index, newTask) => {
    const newTasks = [...tasks];
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
        {tasks && (
          <div className="taskManager--grid">
            <div className="taskManager--taskList">
              <TaskList
                tasks={tasks}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            </div>
            <div className="taskManager--sort">
              <SortTasks tasks={tasks} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
