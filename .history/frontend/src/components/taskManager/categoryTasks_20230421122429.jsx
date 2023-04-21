import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/category.css";

const CategoryTask = ({ tasks }) => {
  const { category } = useParams();

  const tasksByCategory = tasks.filter((task) => task.category === category);

  return (
    <div className="category">
      <h2 className="category--head">Tasks in {category} Category</h2>
        {tasksByCategory.length === 0 ? (
          <div className="category--empty">
            <h2 className="category--empty__msg">
              You do not have any tasks in this category
            </h2>
            <p className="category--empty__subMsg">
              Add a task to get started
            </p>
          </div>
        ) : (
          <div className="category--lists">
        <ul className="category--lists">
          {tasksByCategory.map((task, index) => (
            <li key={index} className="category--list">
              <p className="category--item">
                <strong>Title: </strong> {task.title}
              </p>
              <p className="category--item">
                <strong>Description: </strong> {task.description}
              </p>
              <p className="category--item">
                <strong>Status: </strong> {task.status}
              </p>
              <p className="category--item">
                <strong>Date Added:</strong> {task.dateAdded}
              </p>
              <p className="category--item">
                <strong>Due Date:</strong> {task.dueDate}
              </p>
              <p className="category--item">
                <strong>Category: </strong> {task.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
        )}
        <Link to="/" className="category--link">
          Back to Categories
        </Link>
      </div>
  );
};

  export default CategoryTask;
