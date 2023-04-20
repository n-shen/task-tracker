import React from 'react';

const Task = ({ task, onEditTask, onDeleteTask, taskId }) => {
  const { id, title, description, status, dateAdded, dueDate } = task;

  const handleEditClick = () => {
    onEditTask(task);
  };

  const handleDeleteClick = () => {
    onDeleteTask(taskId);
  };

  return (
    <div key={task.id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
       <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Task;
