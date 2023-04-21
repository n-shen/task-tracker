import React from "react";
import { Link } from "react-router-dom";
import "../../styles/category.css";

export const ViewByCategory = () => {
  const categories = ["Work", "Personal", "Finance", "Travel", "Others"];

  return (
    <div className="view">
      <h2 className="view--head">Category</h2>
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
      </div>
    </div>
  );
};

export default ViewByCategory;
