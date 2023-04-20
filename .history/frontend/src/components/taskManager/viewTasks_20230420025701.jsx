import React, { useState } from "react";

const ViewByCategory = ({ tasks }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Work", "Personal", "Finance", "Others"];

  const tasksByCategory = (category) => {
    return tasks.filter((task) => task.category === category);
  };

  return (
    <div>
      <h2>View By Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {selectedCategory && (
          <div>
            <h3>{selectedCategory}</h3>
            <ul>
              {tasksByCategory(selectedCategory).map((task) => (
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
        )}
      </div>
    </div>
  );
};

export default ViewByCategory;
