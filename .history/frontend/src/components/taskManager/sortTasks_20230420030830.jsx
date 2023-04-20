import React, { useState, useEffect } from "react";
import Task from "./Task";

const SortTask = ({ tasks }) => {
  const [sortedTasks, setSortedTasks] = useState(tasks);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    switch (sortBy) {
      case "title":
        setSortedTasks([...tasks].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "status":
        setSortedTasks([...tasks].sort((a, b) => a.status.localeCompare(b.status)));
        break;
      case "dateAdded":
        setSortedTasks([...tasks].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)));
        break;
      case "dueDate":
        setSortedTasks([...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
        break;
      default:
        setSortedTasks(tasks);
        break;
    }
  }, [sortBy, tasks]);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <h2>Sort Tasks</h2>
      <div>
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" value={sortBy} onChange={handleSortBy}>
          <option value="">--Select--</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="dateAdded">Date Added</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <div>
        {sortedTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default SortTask;
