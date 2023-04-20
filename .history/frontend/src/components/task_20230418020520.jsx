// * Create a task with a title, description, status (completed, in progress, etc.), and due date
// * Edit and delete Tasks
// * View all tasks, and sort by title, status, and due date
// * Users can log in by entering their name

import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Task = (props) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setTask({
          title: "",
          description: "",
          status: "",
          dueDate: "",
        });
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(tasks.filter((task) => task.id !== id));
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const handleSort = (event) => {
    if (event.target.value === "title") {
      const sortedTasks = tasks.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
      setTasks([...sortedTasks]);
    } else if (event.target.value === "status") {
      const sortedTasks = tasks.sort((a, b) => {
        if (a.status < b.status) {
          return -1;
        } else if (a.status > b.status) {
          return 1;
        } else {
          return 0;
        }
      });
      setTasks([...sortedTasks]);
    } else if (event.target.value === "dueDate") {
      const sortedTasks = tasks.sort((a, b) => {
        if (a.dueDate < b.dueDate) {
          return -1;
        } else if (a.dueDate > b.dueDate) {
          return 1;
        }
        return 0;
      });
      setTasks([...sortedTasks]);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={task.status}
          onChange={handleChange}
        />
        <label>Due Date</label>
        <input
          type="text"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
        <input type="submit" value="Create Task" />
      </form>
      <select onChange={handleSort}>
        <option value="title">Sort by Title</option>
        <option value="status">Sort by Status</option>
        <option value="dueDate">Sort by Due Date</option>
      </select>
      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Task;