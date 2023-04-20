import { React, useState } from "react";

const SortTask = ({ tasks }) => {
  const [sortBy, setSortBy] = useState("status");

  const sortedTasks =
    tasks?.slice().sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "status":
          return a.status.localeCompare(b.status);
        case "dateAdded":
          return new Date(a.dateAdded) - new Date(b.dateAdded);
        case "dueDate":
          return new Date(a.dueDate) - new Date(b.dueDate);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    }) || [];

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <h2>Sort Tasks</h2>
      <div>
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" value={sortBy} onChange={handleSortBy}>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="dateAdded">Date Added</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <div>
        <ul>
          {sortedTasks.map((task, index) => (
            <li key={index}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>Date Added: {task.dateAdded}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Category: {task.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortTask;
