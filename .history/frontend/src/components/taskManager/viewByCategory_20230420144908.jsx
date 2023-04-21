import React from "react";
import { Link } from "react-router-dom";
import "../../styles/category.css";

const ViewByCategory = () => {
  const categories = ["Work", "Personal", "Finance", "Others"];

  return (
    <div className="view">
      <h2 className="view--head">View By Category</h2>
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
  );
};

export default ViewByCategory;
