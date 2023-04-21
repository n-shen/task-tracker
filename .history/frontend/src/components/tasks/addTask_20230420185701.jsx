import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("planned");
  const [dateAdded, setDateAdded] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, status, dateAdded, dueDate, category });
    setTitle("");
    setDescription("");
    setStatus("");
    setDateAdded("");
    setDueDate("");
    setCategory("");
  };

  // handle change
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
      case "category":
        setCategory(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form--group">
        <label htmlFor="title" className="form--label">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="form--input"
        />
      </div>
      <div className="form--group">
        <label htmlFor="description" className="form--label">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          className="form--input"
        />
      </div>
      <div className="form--group">
        <label htmlFor="status" className="form--label">Status</label>
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className="form--select"
        >
          <option value="Planned" className="form--select">Planned</option>
          <option value="In Progress" className="form--select">In Progress</option>
          <option value="Completed" className="form--select">Completed</option>
          <option value="Delayed" className="form--select">Delayed</option>
          <option value="Cancelled" className="form--select">Cancelled</option>
        </select>
      </div>
      <div className="form--group">
        <label htmlFor="dateAdded" className="form--label">Date Added</label>
        <input
          type="date"
          name="dateAdded"
          value={dateAdded}
          onChange={handleChange}
          className="form--input"
        />
      </div>
      <div className="form--group">
        <label htmlFor="dueDate" className="form--label">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={handleChange}
          className="form--input"
        />
      </div>
      <div className="form--group">
        <label htmlFor="category" className="form--label">Category</label>
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className="form--select"
        >
          <option value="">--Select option--</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Finance">Finance</option>
          <option value="Others">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
};

export default AddTaskForm;
