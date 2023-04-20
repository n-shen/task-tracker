import React, { useState } from "react";

const EditTaskForm = ({ task, onEdit, toggleEditTask }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: task.id,
      title: title,
      description: description,
      status: status,
      dateAdded: task.dateAdded,
      dueDate: dueDate,
    };
    onEdit(editedTask);
    toggleEditTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <label htmlFor="dueDate">Due Date:</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTaskForm;
