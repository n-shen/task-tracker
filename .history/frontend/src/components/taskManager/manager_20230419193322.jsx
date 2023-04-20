import React, { useState, useEffect } from "react";
import AddTaskForm from "./addTask";
import EditTaskForm from "../tasks/editTasks";
import DeleteTaskButton from "../tasks/deleteTasks";
import ViewTasks from "./viewTasks";
import TaskList from "../tasks/taskLists";

const TaskManager = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [showDeleteTask, setShowDeleteTask] = useState(false);
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
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
    setShowDeleteTask(false);
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
    toggleEditTask();
  };

  const handleDeleteClick = (task) => {
    setSelectedTask(task);
    toggleDeleteTask();
  };

  const toggleAddTask = () => setShowAddTask(!showAddTask);

  const toggleEditTask = () => setShowEditTask(!showEditTask);

  const toggleDeleteTask = () => setShowDeleteTask(!showDeleteTask);

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
          onDeleteTask={handleDeleteClick}
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
      {showDeleteTask && (
        <DeleteTaskButton
          taskId={selectedTask.id}
          onDelete={handleDeleteTask}
          toggleDeleteTask={toggleDeleteTask}
        />
      )}
    </div>
  );
};

export default TaskManager;
