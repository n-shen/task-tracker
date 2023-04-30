import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTasksContext } from "../../hooks/useTasksContext";
import axios from "axios";
import moment from "moment";
import "../../styles/taskList.css";

const Task = ({ task }) => {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();
  const { shared_info } = useAuthContext();
  const baseURL = shared_info.baseURL;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const statusHash = {
    1: "Planned",
    2: "In Progress",
    4: "Completed",
    3: "Delayed",
    5: "Cancelled",
  };

  const handleDelete = (task) => {
    // console.log("delete", task);
    axios
      .delete(`${baseURL}/task/destroy/${task._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data["success"]) {
          dispatch({ type: "DELETE_TASKS", payload: response.data["task"] });
        }
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios
      .post(
        `${baseURL}/task/update`,
        {
          taskId: editedTask._id,
          taskTitle: editedTask.title,
          taskDescription: editedTask.description,
          taskStatus: editedTask.status,
          taskDeadline: editedTask.deadline,
          taskCategory: editedTask.category,
          taskUser: task.fk_user,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        if (response.data["success"])
          dispatch({ type: "UPDATE_TASKS", payload: response.data["task"] });
      });
    setIsEditing(false);
    // console.log("updated", editedTask);
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
      <div className="edit--wrapper">
        <div className="edit--group">
          <label className="edit--label">Title </label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
            className="edit--input"
          />
        </div>
        <div className="edit--group">
          <label className="edit--label">Description </label>
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
            className="edit--description"
          ></textarea>
        </div>
        <div className="edit--group">
          <label className="edit--label">Status </label>
          <select
            name="status"
            value={editedTask.status}
            onChange={handleEditChange}
            className="edit--select"
          >
            <option value="1">Planned</option>
            <option value="2">In Progress</option>
            <option value="4">Completed</option>
            <option value="3">Delayed</option>
            <option value="5">Cancelled</option>
          </select>
        </div>
        <div className="edit--group">
          <label className="edit--label">Due Date</label>
          <input
            type="date"
            name="deadline"
            value={moment.utc(task.deadline).format("YYYY-MM-DD")}
            onChange={handleEditChange}
            className="edit--input"
          />
        </div>
        <div className="edit--group">
          <label className="edit--label">Category </label>
          <select
            name="category"
            value={editedTask.category}
            onChange={handleEditChange}
            className="edit--select"
          >
            <option value="">--Select option--</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="edit--btns">
          <button onClick={handleSave} className="edit--btn">
            Save
          </button>
          <button onClick={handleCancel} className="edit--btn">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task">
      <div className="task--wrapper">
        <p className="mt-3 task--item">
          <strong>Title: </strong>
          {task.title}
        </p>
        <p className="task--item">
          <strong>Description </strong>
          {task.description}
        </p>
        <p className="task--item">
          <strong>Due Date: </strong>
          {moment.utc(task.deadline).format("YYYY-MM-DD")}
        </p>
        <p className="task--item">
          <strong>Status: </strong>
          {task.status === 1 && (
            <span className="badge rounded-pill bg-info text-dark">
              {statusHash[task.status]}
            </span>
          )}
          {task.status === 2 && (
            <span className="badge rounded-pill bg-primary">
              {statusHash[task.status]}
            </span>
          )}
          {task.status === 4 && (
            <span className="badge rounded-pill bg-success">
              {statusHash[task.status]}
            </span>
          )}{" "}
          {task.status === 3 && (
            <span className="badge rounded-pill bg-warning text-dark">
              {statusHash[task.status]}
            </span>
          )}
          {task.status === 5 && (
            <span className="badge rounded-pill bg-danger">
              {statusHash[task.status]}
            </span>
          )}
        </p>

        <p className="task--item">
          <strong>Category: </strong>
          {task.category}
        </p>
        <div className="task--btns">
          <button
            onClick={() => {
              handleDelete(task);
            }}
            className="task--btn"
          >
            Delete
          </button>
          <button onClick={handleEdit} className="task--btn">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
