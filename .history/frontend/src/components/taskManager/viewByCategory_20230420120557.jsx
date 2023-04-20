import React from "react";
import { Link, useParams } from "react-router-dom";

const ViewByCategory = ({ tasks }) => {
  const categories = ["Work", "Personal", "Finance", "Others"];
  const { category } = useParams();

  const tasksByCategory = (category) => {
    return tasks.filter((task) => task.category === category);
  };

  return (
    <div>
      <h2>View By Category</h2>
      <ul>
        {categories.map((categoryName) => (
          <li key={categoryName}>
            <Link to={`/category/${categoryName}`}>
              {categoryName}
            </Link>
          </li>
        ))}
      </ul>
      {category && (
        <div>
          <h3>{category}</h3>
          <ul>
            {tasksByCategory(category).map((task, index) => (
              <li key={index}>
                <div>Title: {task.title}</div>
                <div>Description: {task.description}</div>
                <div>Status: {task.status}</div>
                <div>Due Date: {task.dueDate}</div>
                <div>Category: {task.category}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ViewByCategory;
