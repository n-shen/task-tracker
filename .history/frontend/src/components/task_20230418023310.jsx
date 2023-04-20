// * Create a task with a title, description, status (completed, in progress, etc.), and due date
// * Edit and delete Tasks
// * View all tasks, and sort by title, status, and due date
// * Users can log in by entering their name
import React, { useState } from "react";

function Tracker() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
    category: "",
  });
  const [sortType, setSortType] = useState("title");
  const [category, setCategory] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, currentTask]);
    setCurrentTask({
      title: "",
      description: "",
      status: "",
      dueDate: "",
      category: "",
    });
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    const newTasks = [...tasks];
    const updatedTask = newTasks[index];
    updatedTask.title = title;
    updatedTask.description = description;
  };

  const handleSort = (event) => {
    setSortType(event.target.value);
  };

  const sortTasks = [...tasks].sort((a, b) =>
    a[sortType].localeCompare(b[sortType])
  );

  const filteredTasks = category
  ? tasks.filter((task) => task.category === category)
  : tasks;

  const sortedTasks = filteredTasks.sort(sortTasks);

  return (
    <div>
      <h1>Task Tracker App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={currentTask.title}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={currentTask.description}
          onChange={handleInputChange}
        />
        <label htmlFor="status">Status:</label>
        <select name="status" value={currentTask.status} onChange={handleInputChange}>
          <option value="">Select Status</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={currentTask.dueDate}
          onChange={handleInputChange}
        />
        <label htmlFor="category">Category:</label>
        <select name="category" value={currentTask.category} onChange={handleInputChange}>
          <option value="">Select Category</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="school">School</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <div>
        <h2>All Tasks</h2>
        <label htmlFor="sortType">Sort By:</label>
        <select name="sortType" value={sortType} onChange={handleSort}>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="dueDate">Due Date</option>
        </select>
        <ul>
          {sortedTasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.status}</p>
              <p>{task.dueDate}</p>
              <p>{task.category}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tracker;
