import React from 'react';

const DeleteTaskButton = ({ taskId, onDelete, onClose }) => {
  const handleClick = () => {
    onDelete(taskId);
    onClose();
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteTaskButton;
