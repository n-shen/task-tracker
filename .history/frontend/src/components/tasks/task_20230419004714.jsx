import React from 'react';

const Task = ({ task }) => {
  const { title, description, status, dateAdded, dueDate } = task;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
