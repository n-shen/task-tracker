import { React, useState } from "react";
import AddTaskForm from "../tasks/addTask";
import TaskList from "../tasks/taskLists";
import SortTasks from "./sortTasks";
import ViewByCategory from "./viewByCategory";
import CategoryTask from "./categoryTasks";
import { Routes, Route } from "react-router-dom";
import "../../styles/manager.css";
import "../../styles/addTasks.css";
import { MdAddTask } from "react-icons/md";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

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
        <div className="taskManager--addTask">
          <div className="taskManager--addTask__btn">
            <button onClick={handleShowAddTask} className="addTask-btn">
              <MdAddTask className="addTask-icon" />
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
