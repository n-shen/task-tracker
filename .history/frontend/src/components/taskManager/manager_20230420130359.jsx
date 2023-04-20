import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
import TaskList from "../tasks/taskLists";
import SortTasks from "./sortTasks";
import ViewByCategory from "./viewByCategory";
import CategoryTask from "./categoryTasks";
import { Routes, Route } from "react-router-dom";
import "../../styles/manager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowAddTask(false);
  };

  const handleShowAddTask = () => {
    setShowAddTask(true);
  };

  const handleHideAddTask = () => {
    setShowAddTask(false);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  return (
    <div className="taskManager">
      <div className="taskManager--wrapper">
        <h1 className="taskManager--title">Task Manager</h1>
        <div className="taskManager--grid">
          <div className="taskManager--addTask">
            <div className="taskManager--addTask__btn">
              <button onClick={handleShowAddTask} className="addTask-btn">
                Add Task
              </button>
            </div>
            <div className="taskManager--addTask__container">
              {showAddTask && (
                <AddTaskForm
                  onAdd={handleAddTask}
                  onHideAddTask={handleHideAddTask}
                />
              )}
            </div>
          </div>
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
          <div className="taskManager--view">
            <Routes>
              <Route path="/" element={<ViewByCategory tasks={tasks} />} />
              <Route
                path="/category/:category"
                element={<CategoryTask tasks={tasks} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
