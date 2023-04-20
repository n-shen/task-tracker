import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
import EditTaskForm from "../tasks/editTasks";
// import ViewTasks from "./viewTasks";
import TaskList from "../tasks/taskLists";

const TaskManager = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowAddTask(false);
  };

  const handleEditTask = (editedTask) => {
    const newTasks = tasks.map((t) => {
      if (t.id === editedTask.id) {
        return editedTask;
      }
      return t;
    });
    setTasks(newTasks);
    setShowEditTask(false);
  };

  const handleDeleteTask = (taskId, id) => {
    const newTasks = tasks.filter((t, i) => t !== taskId || i === id
    );
    console.log(newTasks)
    setTasks(newTasks);
  };

  const handleShowAddTask = () => {
    setShowAddTask(true);
  };

  const handleShowEditTask = (task) => {
    setShowEditTask(true);
    setSelectedTask(task);
  };

  const handleHideAddTask = () => {
    setShowAddTask(false);
  };

  const handleHideEditTask = () => {
    setShowEditTask(false);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={handleShowAddTask}>Add Task</button>
      </div>
      {showAddTask && (
        <AddTaskForm
          onAdd={handleAddTask}
          onHideAddTask={handleHideAddTask}
        />
      )}
      {showEditTask && (
        <EditTaskForm
          task={selectedTask}
          onEditTask={handleEditTask}
          onHideEditTask={handleHideEditTask}
        />
      )}
      {/* <ViewTasks tasks={tasks} onEditTask={handleShowEditTask} onDeleteTask={handleDeleteTask} /> */}
      <TaskList
        tasks={tasks}
        onEditTask={handleShowEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskManager;
