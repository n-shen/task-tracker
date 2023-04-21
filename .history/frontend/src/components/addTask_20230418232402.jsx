// form to input task which will be exported to use in the main task file that displays all task added

import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  
  const [error, setError] = useState("");

  const handleChange =  (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: task.title,
      description: task.description,
      status: task.status,
      dueDate: task.dueDate,
      dateAdded: task.dateAdded,
      category: task.category,
    };
    if (!task.title) {
      setError("Title is required");
      return;
    }
    if (!task.description) {
      setError("Description is required")
      return;
    }
    if (!task.dueDate) {
      setError("Due Date is required")
      return;
    }
    // save to local storage
    localStorage.setItem("title", JSON.stringify(task.title));
    localStorage.setItem("description", JSON.stringify(task.description));
    localStorage.setItem("status", JSON.stringify(task.status));
    localStorage.setItem("dueDate", JSON.stringify(task.dueDate));
    localStorage.setItem("dateAdded", JSON.stringify(task.dateAdded));
    localStorage.setItem("category", JSON.stringify(task.category));
    onAdd(newTask);
    setError("");
    setTask({
      title: "",
      description: "",
      status: "In Progress",
      dueDate: "",
      dateAdded: "",
      category: "Work",
    });
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Add Title"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Add Description"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="form-control">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Date Added</label>
          <input
            type="date"
            name="dateAdded"
            value={task.dateAdded}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Category</label>
          <select
            name="category"
            value={task.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
          </select>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddTask;