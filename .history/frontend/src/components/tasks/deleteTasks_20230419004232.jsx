import React from 'react';

const DeleteTaskButton = ({ taskId, onDelete }) => {
  const handleClick = () => {
    onDelete(taskId);
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteTaskButton;
