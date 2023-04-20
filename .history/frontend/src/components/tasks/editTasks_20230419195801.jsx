import React, { useState, useEffect } from "react";

const EditTaskForm = ({ task, onEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
      setDateAdded(task.dateAdded);
      setDueDate(task.dueDate);
    }
  }, [task]);


  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...task, title, description, status, dateAdded, dueDate });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "dateAdded":
        setDateAdded(value);
        break;
      case "dueDate":
        setDueDate(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleChange} />
      </label>
      <label>
        Status:
        <select value={status} onChange={handleChange}>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Date Added:
        <input type="date" value={dateAdded} onChange={handleChange} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={handleChange} />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditTaskForm;
