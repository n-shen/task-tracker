import { React, useState } from "react";
import "../../styles/sortTasks.css";

const SortTask = ({ tasks }) => {
  const [sortBy, setSortBy] = useState("status");

  const sortedTasks =
    tasks?.slice().sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "status":
          return b - a;
        case "dateAdded":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "dueDate":
          return new Date(a.deadline) - new Date(b.deadline);
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
        <div className="sort--select--wrapper">
          <label htmlFor="sort" className="sort--label">
            Sort By:{" "}
          </label>
          <select
            name="sort"
            value={sortBy}
            onChange={handleSortBy}
            className="sort--select"
          >
            <option value="title" className="sort--option">
              Title
            </option>
            <option value="status" className="sort--option">
              Status
            </option>
            <option value="dateAdded" className="sort--option">
              Date Added
            </option>
            <option value="dueDate" className="sort--option">
              Due Date
            </option>
          </select>
        </div>
        <div>
          <ul className="sort--lists">
            {sortedTasks.map((task, index) => (
              <li key={index} className="sort--list">
                <p className="sort--list__item">
                  <strong>Title: </strong>
                  {task.title}
                </p>
                <p className="sort--list__item">
                  <strong>Description: </strong>
                  {task.description}
                </p>
                <p className="sort--list__item">
                  <strong>Status: </strong>
                  {task.status}
                </p>
                <p className="sort--list__item">
                  <strong>Date Added: </strong>
                  {task.createdAt}
                </p>
                <p className="sort--list__item">
                  <strong>Due date: </strong>
                  {task.deadline}
                </p>
                <p className="sort--list__item">
                  <strong>Category: </strong>
                  {task.category}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortTask;
