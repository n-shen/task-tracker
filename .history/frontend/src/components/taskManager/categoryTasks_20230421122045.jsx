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
      <p className="category--subHead">
        {tasksByCategory.length === 0 (
          <span className="category--empty">No tasks in this category, Click on a task to edit it</span>
        ) : (
          <span className="category--count">{tasksByCategory.length} tasks</span>
        )}
      </p>
      <div className="category--list">
        {tasksByCategory.map((task, index) => (
          <div className="category--list__item" key={index}>
            <Link to={`/edit/${index}`}>
              <h3 className="category--list__item__title">{task.title}</h3>
            </Link>
            <p className="category--list__item__desc">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTask;