import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryTask = ({ tasks }) => {
  const { category } = useParams();

  const tasksByCategory = tasks.filter((task) => task.category === category);

  return (
    <div>
      <h2>Tasks in {category} Category</h2>
      <ul>
        {tasksByCategory.map((task, index) => (
          <li key={index}>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Status: {task.status}</div>
            <div>Due Date: {task.dueDate}</div>
            <div>Category: {task.category}</div>
          </li>
        ))}
      </ul>
      <Link to="/category">Back to Categories</Link>
    </div>
  );
};

export default CategoryTask;
