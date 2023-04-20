import React, { useState } from "react";

const EditTaskForm = ({ task, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [category, setCategory] = useState(task.category);


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = ({ ...task, title, description, status, dueDate, category });
    onUpdate(updatedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Not started">Not started</option>
        <option value="In progress">In progress</option>
        <option value="Completed">Completed</option>
      </select>
      <label htmlFor="dueDate">Due Date</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Finance">Finance</option>
      </select>
      <button type="submit">Update task</button>
    </form>
  );
};

export default EditTaskForm;
