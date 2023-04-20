import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
import TaskList from "../tasks/taskLists";
import SortTasks from "./sortTasks";
import ViewByCategory from "./viewByCategory";
import CategoryTasks from "./viewByCategory";
import { Routes, Route } from "react-router-dom";

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
    <div>
      <h1>Task Manager</h1>
      <SortTasks tasks={tasks} />
      <div>
        <button onClick={handleShowAddTask}>Add Task</button>
      </div>
      {showAddTask && (
        <AddTaskForm onAdd={handleAddTask} onHideAddTask={handleHideAddTask} />
      )}
      {/* <ViewByCategory tasks={tasks} /> */}
      <Routes>
        <Route path="/viewByCategory" element={<ViewByCategory tasks={tasks} />} />
        <Route path="/viewByCategory/:category" element={<CategoryTasks tasks={tasks} />} />
      </Routes>
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </div>
  );
};

export default TaskManager;
