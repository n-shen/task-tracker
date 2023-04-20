import React, { useState, useEffect } from 'react';
import AddTaskForm from './addTask';
import EditTaskForm from '../tasks/editTasks';
import DeleteTaskButton from '../tasks/deleteTasks';
import sortTasks from './sortTasks';
import ViewTasks from './viewTasks';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [showDeleteTask, setShowDeleteTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [sortBy, setSortBy] = useState('status');

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  , [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowAddTask(false);
  }

  const handleEditTask = (task) => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(newTasks);
    setShowEditTask(false);
  }

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== selectedTask.id);
    setTasks(newTasks);
    setShowDeleteTask(false);
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  }

  const sortedTasks = sortTasks(tasks, sortBy);

  const toggleAddTask = () => setShowAddTask(!showAddTask);

  const toggleEditTask = () => setShowEditTask(!showEditTask);

  const toggleDeleteTask = () => setShowDeleteTask(!showDeleteTask);

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={toggleAddTask}>Add Task</button>
        {showAddTask && <AddTaskForm onSave={handleAddTask} />}
      </div>
      <div>
        <label>Sort By:</label>
        <select onChange={handleSortChange}>
          <option value="">select</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="dateAdded">Date Added</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <div>
        {sortedTasks.map((task) => (
