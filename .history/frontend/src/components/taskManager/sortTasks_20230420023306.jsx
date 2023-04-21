import React, { useState } from "react";

const SortTasks = ({ onSort }) => {
  const [sortBy, setSortBy] = useState("title");

  const handleChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    onSort(newSortBy);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select name="sort" value={sortBy} onChange={handleChange}>
        <option value="">--Select option--</option>
        <option value="title">Title</option>
        <option value="status">Status</option>
        <option value="dateAdded">Date Added</option>
        <option value="dueDate">Due Date</option>
      </select>
    </div>
  );
};

export default SortTasks;
