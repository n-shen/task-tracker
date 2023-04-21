import React from "react";
import { useParams, Link } from "react-router-dom";

const CategoryTasks = ({ tasks }) => {
  const { category } = useParams();
  const categoryTasks = tasks.filter((task) => task.category === category);

  return (
    <div>
      <h2>Tasks for {category}</h2>
      <ul>
        {categoryTasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              <div>Title: {task.title}</div>
              <div>Description: {task.description}</div>
              <div>Status: {task.status}</div>
              <div>Due Date: {task.dueDate}</div>
              <div>Category: {task.category}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryTasks;