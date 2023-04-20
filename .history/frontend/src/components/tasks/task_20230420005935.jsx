import React, { useState } from 'react';
import EditTaskForm from './editTasks';

const Task = ({ task, onDelete, onUpdate }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEditClick = () => {
    setShowEditForm(true);
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setNewTask(task);
  };

  const handleSaveClick = () => {
    onUpdate(newTask);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  if (editMode) {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newTask.status}
          onChange={handleInputChange}
        >
          <option value="Not started">Not started</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    );
  }

  // const handleUpdate = (updatedTask) => {
  //   onUpdate(updatedTask);
  //   setShowEditForm(false);
  // };

  // const handleDeleteClick = () => {
  //   onDelete(task.id);
  // };

  const { id, title, description, status, dateAdded, dueDate } = task;

  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      {/* {showEditForm && <EditTaskForm task={task} onUpdate={handleUpdate} />} */}
    </div>
  );
};

export default Task;
