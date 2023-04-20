import React from "react";
import { Link, Route } from "react-router-dom";
import CategoryTasks from "./categoryTasks";

const ViewByCategory = ({ tasks }) => {
  const categories = ["Work", "Personal", "Finance", "Others"];

  return (
    <div>
      <h2>View By Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      {categories.map((category) => (
        <Route key={category} path={`/category/${category}`}>
          <CategoryTasks tasks={tasks} category={category} />
        </Route>
      ))}
    </div>
  );
};

export default ViewByCategory;
