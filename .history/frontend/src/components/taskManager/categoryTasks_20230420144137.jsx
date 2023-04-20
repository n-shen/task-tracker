import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryTask = ({ tasks }) => {
  const { category } = useParams();

  const tasksByCategory = tasks.filter((task) => task.category === category);

  return (
    <div className="category">
      <h2 className="category--head">Tasks in {category} Category</h2>
      <ul className="category--lists">
        {tasksByCategory.map((task, index) => (
          <li key={index} className="category--list">
            <p className="category--item">Title: {task.title}</p>
            <p className="category--item">Description: {task.description}</p>
            <p className="category--item">Status: {task.status}</p>
            <p className="category--item">Due Date: {task.dueDate}</p>
            <p className="category--item">Category: {task.category}</p>
          </li>
        ))}
      </ul>
      <Link to="/" className="category--link">Back to Categories</Link>
    </div>
  );
};

export default CategoryTask;
