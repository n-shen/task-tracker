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
      <ul className="sort--lists">
        {tasksByCategory.map((task, index) => (
          // <li key={index} className="category--list">
          //   <p className="category--item">Title: {task.title}</p>
          //   <p className="category--item">Description: {task.description}</p>
          //   <p className="category--item">Status: {task.status}</p>
          //   <p className="category--item">Due Date: {task.dueDate}</p>
          //   <p className="category--item">Category: {task.category}</p>
          // </li>
           <li key={index} className="sort--list">
           <p className="sort--list__item">
             <strong>Title: </strong>
             {task.title}
           </p>
           <p className="sort--list__item">
             <strong>Description: </strong>
             {task.description}
           </p>
           <p className="sort--list__item">
             <strong>Status: </strong>Status: {task.status}
           </p>
           <p className="sort--list__item">
             <strong>Date Added: </strong>Date Added: {task.dateAdded}
           </p>
           <p className="sort--list__item">
             <strong>Due date: </strong>Due Date: {task.dueDate}
           </p>
           <p className="sort--list__item">
             <strong>Category: </strong>Category: {task.category}
           </p>
         </li>
        ))}
      </ul>
      <Link to="/" className="category--link">
        Back to Categories
      </Link>
    </div>
  );
};

export default CategoryTask;
