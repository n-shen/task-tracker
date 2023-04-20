import React, { useState } from 'react';
import EditTaskForm from './editTaskForm';

const Task = ({ task, onDelete, onUpdate }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleUpdate = (updatedTask) => {
    onUpdate(updatedTask);
    setShowEditForm(false);
  };

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
      {showEditForm && <EditTaskForm task={task} onUpdate={handleUpdate} />}
    </div>
  );
};

export default Task;
