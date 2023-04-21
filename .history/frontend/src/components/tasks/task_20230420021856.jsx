import { useState } from "react";

const Task = ({ index, task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    onDelete(index);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleEditChange}
        />
        <input
          type="text"
          name="description"
          value={editedTask.description}
          onChange={handleEditChange}
        />
        <select
          name="status"
          value={editedTask.status}
          onChange={handleEditChange}
        >
          <option value="Planned">Planned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="date"
          name="dateAdded"
          value={editedTask.dateAdded}
          onChange={handleEditChange}
        />
        <input
          type="date"
          name="dueDate"
          value={editedTask.dueDate}
          onChange={handleEditChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.dateAdded}</p>
      <p>{task.dueDate}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;