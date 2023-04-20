import React, { useState } from "react";
import EditTaskForm from "./editTasks";

const Task = ({ task, onEdit, onDeleteTask }) => {
  const { id, title, description, status, dateAdded, dueDate } = task;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleEdit = (editedTask) => {
    onEdit(editedTask);
    setShowEditForm(false);
  };

  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <div>
      {showEditForm ? (
        <EditTaskForm task={task} onEdit={handleEdit} toggleEditTask={() => setShowEditForm(false)} />
      ) : (
        <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
      </>
      )}
    </div>
  );
};

export default Task;
