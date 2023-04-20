import React, { useState } from "react";

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("Title");
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSortByChange = (e) => setSortBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      dueDate,
      category,
    };
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!description) {
      setError("Description is required");
      return;
    }
    if (!dueDate) {
      setError("Due Date is required");
      return;
    }
    if (!category) {
      setError("Category is required");
      return;
    }
    setTasks([...tasks, newTask]);
    setError("");
    setTitle("");
    setDescription("");
    setStatus("In Progress");
    setDueDate("");
    setCategory("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    const newTasks = [...tasks];
    const updatedTask = newTasks[index];
    updatedTask.title = title;
    updatedTask.description = description;
    updatedTask.status = status;
    updatedTask.dueDate = dueDate;
    updatedTask.category = category;
    setTasks(newTasks);
  };

  const renderTask = (task, index) => (
    <div className="task" key={index}>
      <div className="task-info">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Category: {task.category}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => handleDeleteTask(index)}>Delete</button>
        <button onClick={() => handleEditTask(index)}>Edit</button>
      </div>
    </div>
  );

  const renderTasks = () => tasks.map(renderTask);

  const sortTasks = (a, b) => {
    switch (sortBy) {
      case "Title":
        return a.title.localeCompare(b.title);
      case "Status":
        return a.status.localeCompare(b.status);
      case "Due Date":
        return a.dueDate.localeCompare(b.dueDate);
      default:
        return 0;
    }
  };

  const filteredTasks = category
    ? tasks.filter((task) => task.category === category)
    : tasks;

  const sortedTasks = filteredTasks.sort(sortTasks);

  const renderFolder = (folder, index) => (
    <div className="folder" key={index}>
      <h2>{folder}</h2>
      {sortedTasks.filter((task) => task.category === folder).map(renderTask)}
    </div>
  );

  const renderFolders = () =>
    [...new Set(tasks.map((task) => task.category))].map(renderFolder);

  return (
    <div className="task">
      <h1 className="task--heading">Task Tracker</h1>
      <form onSubmit={handleSubmit} className="task--form">
        <label htmlFor="title" className="task--form__label">
          Title:
          <input type="text" value={title} onChange={handleTitleChange} className="task--form__input" />
        </label>
        <label htmlFor="description" className="task--form__label">
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label htmlFor="status" className="task--form__label">
          Status:
          <select value={status} onChange={handleStatusChange} className="task--form__select">
            <option value="In Progress" className="task--form__select__option">In Progress</option>
            <option value="Completed" className="task--form__select__option">Completed</option>
          </select>
        </label>
        <label htmlFor="dueDate" className="task--form__label">
          Due Date:
          <input type="date" value={dueDate} onChange={handleDueDateChange} className="task--form__input" />
        </label>
        <label htmlFor="category" className="task--form__label">
          Category:
          <select value={category} onChange={handleCategoryChange} className="task--form__select">
            <option value="" className="task--form__select__option">Select Category</option>
            <option value="Personal" className="task--form__select__option">Personal</option>
            <option value="Work" className="task--form__select__option">Work</option>
            <option value="School" className="task--form__select__option">School</option>
            <option value="Travel" className="task--form__select__option">Travel</option>
            <option value="Sports" className="task--form__select__option">Sports</option>
            <option value="Finance" className="task--form__select__option">Finance</option>
            <option value="Health" className="task--form__select__option">Health & Fitness</option>
            <option value="Other" className="task--form__select__option">Other</option>
          </select>
        </label>
        <button type="submit" className="task--form__btn">Add Task</button>
        {error && <p className="task--form__error">{error}</p>}
      </form>
      <div>
        <h2 className="task--headingTwo">All Tasks</h2>
        {renderTasks()}
        {/* {renderTasks(sortedTasks)} */}
        <label className="task--sort">
          Sort By:
          <select value={sortBy} onChange={handleSortByChange} className="task--sort__select">
            <option value="Title" className="task--sort__select__option">Title</option>
            <option value="Status" className="task--sort__select__option">Status</option>
            <option value="Due Date" className="task--sort__select__option">Due Date</option>
          </select>
          {renderTasks(sortedTasks)}
        </label>
      </div>
      {/* <div>
        <h2>Tasks by Category</h2>
        {renderFolders()}
      </div> */}
    </div>
  );
};

export default TaskTracker;
