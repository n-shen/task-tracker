import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
import EditTaskForm from "../tasks/editTasks";
import ViewTasks from "./viewTasks";
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

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
    toggleEditTask();
  };

  const toggleAddTask = () => setShowAddTask(!showAddTask);

  const toggleEditTask = () => setShowEditTask(!showEditTask);

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={toggleAddTask}>Add Task</button>
        {showAddTask && <AddTaskForm onAdd={handleAddTask} />}
      </div>
      <div>
        <TaskList
          tasks={tasks}
          onEditTask={handleEditClick}
          onDeleteTask={handleDeleteTask}
          // selectedTask={selectedTask.id}
        />
      </div>
      {/* <div>
        <ViewTasks
          tasks={tasks}
          onEditTask={setSelectedTask}
          onDeleteTask={setSelectedTask}
          toggleEditTask={toggleEditTask}
          toggleDeleteTask={toggleDeleteTask}
        />
      </div> */}
      {showEditTask && (
        <EditTaskForm
          task={selectedTask}
          onEdit={handleEditTask}
          toggleEditTask={toggleEditTask}
        />
      )}
    </div>
  );
};

export default TaskManager;
