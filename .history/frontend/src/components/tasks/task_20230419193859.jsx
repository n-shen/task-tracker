import React from 'react';

const Task = ({ tasks, onEdit, onDelete }) => {
  const { title, description, status, dateAdded, dueDate } = tasks;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      <button onClick={() => onEdit(tasks)}>Edit</button>
      <button onClick={() => onDelete(tasks._id)}>Delete</button>
    </div>
  );
};

export default Task;
