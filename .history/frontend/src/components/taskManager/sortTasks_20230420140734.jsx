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
    <div className="sort">
      <h2 className="sort--head">Sort Tasks</h2>
      <div className="sort--wrapper">
        <label htmlFor="sort" className="sort--label">Sort By: </label>
        <select name="sort" value={sortBy} onChange={handleSortBy}>
          <option value="title" className="sort--option">Title</option>
          <option value="status" className="sort--option">Status</option>
          <option value="dateAdded" className="sort--option">Date Added</option>
          <option value="dueDate" className="sort--option">Due Date</option>
        </select>
      </div>
      <div>
        <ul className="sort--lists">
          {sortedTasks.map((task, index) => (
            <li key={index} className="sort--list">
              <p className="sort--list__item">{task.title}</p>
              <p className="sort--list__item">{task.description}</p>
              <p className="sort--list__item">Status: {task.status}</p>
              <p className="sort--list__item">Date Added: {task.dateAdded}</p>
              <p className="sort--list__item">Due Date: {task.dueDate}</p>
              <p className="sort--list__item">Category: {task.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortTask;
