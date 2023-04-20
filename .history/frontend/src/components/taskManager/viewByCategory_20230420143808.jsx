import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/category.css";

const ViewByCategory = ({ tasks }) => {
  const categories = ["Work", "Personal", "Finance", "Others"];
  const { category } = useParams();

  const tasksByCategory = (category) => {
    return tasks.filter((task) => task.category === category);
  };

  return (
    <div className="view">
      <h2 className="view--head">View By Category</h2>
      <div className="view--wrapper">
      <ul className="view--lists">
        {categories.map((categoryName) => (
          <li key={categoryName} className="view--list">
            <Link to={`/category/${categoryName}`} className="view--categoryName">
              {categoryName}
            </Link>
          </li>
        ))}
      </ul>
      {category && (
        <div className="view--content">
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
    </div>
  );
};

export default ViewByCategory;
