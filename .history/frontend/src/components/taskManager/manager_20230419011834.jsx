import React, { useState, useEffect } from 'react';
import AddTaskForm from './addTask';
import EditTaskForm from '../tasks/editTasks';
// import DeleteTaskButton from './deleteTasks';
import sortTasks from '../taskManager/sortTasks';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedTasks = sortTasks(tasks, sortBy);

  const handleAddTask = (newTask) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data]);
      });
  };

  const handleDeleteTask = (taskId) => {
    fetch(`/api/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      });
  };

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  const handleSaveTask = (task) => {
    fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(tasks.map((task) => (task.id === data.id ? data : task)));
        setEditTask(null);
      });
  };

  return (
    <div>
      <div>
        <label>Sort By:</label>
        <select onChange={handleSortChange}>
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="DateAdded">Date Added</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <div>
        {sortedTasks.map((task) => (
          <div key={task.id}>
            {editTask && editTask.id === task.id ? (
              <EditTaskForm
                task={editTask}
                onSaveTask={handleSaveTask}
                onCancel={() => setEditTask(null)}
              />
            ) : (
              <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                <p>Date Added: {task.dateAdded}</p>
                <p>Due Date: {task.dueDate}</p>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default TaskManager;
