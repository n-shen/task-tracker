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
              <Link
                to={`/category/${categoryName}`}
                className="view--categoryName"
              >
                {categoryName}
              </Link>
            </li>
          ))}
        </ul>
        {category && (
          <div className="content">
            <h3 className="content--title">{category}</h3>
            <ul className="content--lists">
              {tasksByCategory(category).map((task, index) => (
                <li key={index} className="content--list">
                  <p className="content--item">Title: {task.title}</p>
                  <p className="content--item">
                    Description: {task.description}
                  </p>
                  <p className="content--item">Status: {task.status}</p>
                  <p className="content--item">Due Date: {task.dueDate}</p>
                  <p className="content--item">Category: {task.category}</p>
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
