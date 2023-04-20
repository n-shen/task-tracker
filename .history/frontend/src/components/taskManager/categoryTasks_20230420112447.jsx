import React from "react";
import { Link } from "react-router-dom";

const ViewByCategory = ({ tasks }) => {
  // get unique categories
  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <div>
      <h2>View Tasks By Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewByCategory;
