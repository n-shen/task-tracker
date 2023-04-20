import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
import TaskList from "../tasks/taskLists";
import SortTasks from "./sortTasks";

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

  const handleSortTasks = (sortBy) => {
    let sortedTasks;
    switch (sortBy) {
      case "title":
        sortedTasks = tasks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "status":
        sortedTasks = tasks.sort((a, b) => a.status.localeCompare(b.status));
        break;
      case "dateAdded":
        sortedTasks = tasks.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case "dueDate":
        sortedTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        break;
      default:
        sortedTasks = tasks;
        break;
    }
    setTasks([...sortedTasks]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={handleShowAddTask}>Add Task</button>
      </div>
      {showAddTask && (
        <AddTaskForm onAdd={handleAddTask} onHideAddTask={handleHideAddTask} />
      )}
      <SortTasks onSort={handleSortTasks} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </div>
  );
};

export default TaskManager;
