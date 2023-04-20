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
    <div className="App">
      <h1>Task Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label>
          Status:
          <select value={status} onChange={handleStatusChange}>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={handleDueDateChange} />
        </label>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Travel">Travel</option>
            <option value="Sports">Sports</option>

          </select>
        </label>
        <button type="submit">Add Task</button>
        {error && <p>{error}</p>}
      </form>
      <div>
        <h2>All Tasks</h2>
        <label>
          Sort By:
          <select value={sortBy} onChange={handleSortByChange}>
            <option selected>select</option>
            <option value="Title">Title</option>
            <option value="Status">Status</option>
            <option value="Due Date">Due Date</option>
          </select>
        </label>
        {renderTasks(sortedTasks)}
      </div>
      <div>
        <h2>Tasks by Category</h2>
        {renderFolders()}
      </div>
    </div>
  );
};

export default TaskTracker;
