import { useState } from "react";

const AddTaskForm = ({ onAdd, onHideAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!title) {
      newErrors.push("Title is required");
    }

    if (!description) {
      newErrors.push("Description is required");
    }

    if (!dueDate) {
      newErrors.push("Due date is required");
    } else if (new Date(dueDate) < new Date()) {
      newErrors.push("Due date cannot be any past time!");
    }

    if (!category) {
      newErrors.push("Category is required");
    }

    // if (!dateAdded) {
    //   newErrors.push("Date added is required");
    // } else if (new Date(dateAdded) > new Date(dueDate)) {
    //   newErrors.push("Date added cannot be after due date");
    // }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      const newTask = { title, description, status, dueDate, category };
      onAdd(newTask);
      onHideAddTask();
    }
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
        <div className="form--content">
          <label htmlFor="title" className="form--label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="form--input"
          />
        </div>
        {errors.length > 0 &&
          errors.map((error, index) => {
            if (error.includes("Title")) {
              return (
                <p key={index} className="form--error">
                  {error}
                </p>
              );
            }
            return null;
          })}
      </div>
      <div className="form--group">
        <div className="form--content">
          <label htmlFor="description" className="form--label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            className="form--description"
          ></textarea>
        </div>
        {errors.length > 0 &&
          errors.map((error, index) => {
            if (error.includes("Description")) {
              return (
                <p key={index} className="form--error">
                  {error}
                </p>
              );
            }
            return null;
          })}
      </div>
      <div className="form--content">
        <label htmlFor="status" className="form--label">
          Status:
        </label>
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className="form--select"
        >
          <option value="1" className="form--select__option">
            Planned
          </option>
          <option value="2" className="form--select__option">
            In Progress
          </option>
          <option value="4" className="form--select__option">
            Completed
          </option>
          <option value="3" className="form--select__option">
            Delayed
          </option>
          <option value="5" className="form--select__option">
            Cancelled
          </option>
        </select>
      </div>
      {/*<div className="form--group">*/}
      {/*  <div className="form--content">*/}
      {/*    <label htmlFor="dateAdded" className="form--label">*/}
      {/*      Date Added:*/}
      {/*    </label>*/}
      {/*    <input*/}
      {/*      type="date"*/}
      {/*      name="dateAdded"*/}
      {/*      value={dateAdded}*/}
      {/*      onChange={handleChange}*/}
      {/*      className="form--input"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  {errors.length > 0 &&*/}
      {/*    errors.map((error, index) => {*/}
      {/*      if (error.includes("Date added")) {*/}
      {/*        return (*/}
      {/*          <p key={index} className="form--error">*/}
      {/*            {error}*/}
      {/*          </p>*/}
      {/*        );*/}
      {/*      }*/}
      {/*      return null;*/}
      {/*    })}*/}
      {/*</div>*/}
      <div className="form--group">
        <div className="form--content">
          <label htmlFor="dueDate" className="form--label">
            Due Date:
          </label>
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={handleChange}
            className="form--input"
          />
        </div>
        {errors.length > 0 &&
          errors.map((error, index) => {
            if (error.includes("Due date")) {
              return (
                <p key={index} className="form--error">
                  {error}
                </p>
              );
            }
            return null;
          })}
      </div>
      <div className="form--group">
        <div className="form--content">
          <label htmlFor="category" className="form--label">
            Category:
          </label>
          <select
            name="category"
            value={category}
            onChange={handleChange}
            className="form--select"
          >
            <option value="" className="form--select__option">
              --Select option--
            </option>
            <option value="Personal" className="form--select__option">
              Personal
            </option>
            <option value="Work" className="form--select__option">
              Work
            </option>
            <option value="Study" className="form--select__option">
              Study
            </option>
            <option value="Others" className="form--select__option">
              Other
            </option>
          </select>
        </div>
        {errors.length > 0 &&
          errors.map((error, index) => {
            if (error.includes("Category")) {
              return (
                <p key={index} className="form--error">
                  {error}
                </p>
              );
            }
            return null;
          })}
      </div>
      <div className="taskManager--addTask__btn">
        <button type="submit" className="addTask-btn">
          Save Task
        </button>
        <button type="button" className="addTask-btn" onClick={onHideAddTask}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
