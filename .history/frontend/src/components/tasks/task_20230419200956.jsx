import React from 'react';

const Task = ({ tasks, onEditTask, onDeleteTask }) => {
  // const { title, description, status, dateAdded, dueDate } = tasks;

  const handleEditClick = () => {
    onEditTask(tasks.id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(tasks.id);
  };

  return (
    <div>
      {/* <h2>{title}</h2> */}
      {/* <p>{description}</p> */}
      {/* <p>Status: {status}</p> */}
      {/* <p>Date Added: {dateAdded}</p> */}
      {/* <p>Due Date: {dueDate}</p> */}
      <h2>{tasks.title} - {tasks.status}</h2>
      <p>{tasks.description}</p>
      <p>Date Added: {tasks.dateAdded}</p>
      <p>Due Date: {tasks.dueDate}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Task;
