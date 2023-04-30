import React, { useState } from "react";
import Task from "./task";
import "../../styles/taskList.css";
import "../../styles/sortTasks.css";
const TaskList = ({ tasks, category }) => {
  const [sortBy, setSortBy] = useState("status");

  const sortedTasks =
    tasks?.slice().sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "status":
          return a.status - b.status;
        case "createdDate":
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
    // dispatch({ type: "SET_TASKS", payload: sortedTasks });
  };

  // console.log("Ready to display:", tasks);
  return (
    <div className="taskList">
      <h1 className="taskList--head mt-3">{category}</h1>
      <div className="sort--select--wrapper">
        <label htmlFor="sort" className="sort--label">
          Sort By:{" "}
        </label>
        <select
          name="sort"
          value={sortBy}
          onChange={handleSortBy}
          className="sort--select w-auto "
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

      {sortedTasks.map((task, index) => (
        <Task key={task._id} index={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
