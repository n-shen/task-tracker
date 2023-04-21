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
        {tasksByCategory.length === 0 