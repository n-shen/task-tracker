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
    onAdd({ title, description, status, dueDate });
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className="form-control"
        >
          <option value="Planned">Planned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dateAdded">Date Added</label>
        <input
          type="date"
          name="dateAdded"
          value={dateAdded}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className="form-control"
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Other">Finance</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
};

export default AddTaskForm;
