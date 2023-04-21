import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
// import ViewTasks from "./viewTasks";
import TaskList from "../tasks/taskLists";

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



  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  }

  const handleShowAddTask = () => {
    setShowAddTask(true);
  };

  const handleHideAddTask = () => {
    setShowAddTask(false);
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
      {/* <ViewTasks tasks={tasks} onEditTask={handleShowEditTask} onDeleteTask={handleDeleteTask} /> */}
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskManager;