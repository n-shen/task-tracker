
import React from "react";
import { useParams } from "react-router-dom";

const CategoryTasks = ({ tasks }) => {
  const { category } = useParams();
  const categoryTasks = tasks.filter((task) => task.category === category);

  return (
    <div>
      <h2>Tasks for {category}</h2>
      <ul>
        {categoryTasks.map((task) => (
          <li key={task.id}>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Status: {task.status}</div>
            <div>Due Date: {task.dueDate}</div>
            <div>Category: {task.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTasks;