import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ task, onEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [dueDate, setDueDate] = useState("");

  // useEffect(() => {
  //   setTitle(task.title);
  //   setDescription(task.description);
  //   setStatus(task.status);
  //   setDateAdded(task.dateAdded);
  //   setDueDate(task.dueDate);
  // }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit({ title, description, status, dateAdded, dueDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Date Added:
        <input type="date" value={dateAdded} onChange={(e) => setDateAdded(e.target.value)} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditTaskForm;
