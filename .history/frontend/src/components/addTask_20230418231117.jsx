// form to input task which will be exported to use in the main task file that displays all task added

import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "In Progress",
    dueDate: "",
    dateAdded: "",
    category: "",
  });

  const handleChange =  (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title) {
      alert("Title is required");
      return;
    }
    onAdd(task);
    setTask({
      title: "",
      description: "",
      status: "In Progress",
      dueDate: "",
      dateAdded: "",
      category: "",
    });

  }