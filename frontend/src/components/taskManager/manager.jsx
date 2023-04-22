import { React, useEffect, useState } from "react";
import AddTaskForm from "../tasks/addTask";
import TaskList from "../tasks/taskLists";
import "../../styles/manager.css";
import "../../styles/addTasks.css";
import { MdAddTask } from "react-icons/md";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useTasksContext } from "../../hooks/useTasksContext";
import axios from "axios";

const TaskManager = () => {
  const { shared_info } = useAuthContext();
  const baseURL = shared_info.baseURL;

  const { cloud_tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      axios
        .post(
          `${baseURL}/task/fetch`,
          { taskUser: user.user },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          if (response.data["success"]) {
            dispatch({ type: "SET_TASKS", payload: response.data["tasks"] });
            console.log(response.data);
          }
        });
    };

    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);

  const handleAddTask = (task) => {
    axios
      .post(
        `${baseURL}/task/create`,
        {
          taskTitle: task.title,
          taskDescription: task.description,
          taskStatus: task.status,
          taskDeadline: task.dueDate,
          taskCategory: task.category,
          taskUser: user.user,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data["success"])
          dispatch({ type: "CREATE_TASKS", payload: response.data["task"] });
      });
    setShowAddTask(false);
  };

  return (
    <div className="taskManager">
      <div className="taskManager--wrapper">
        <h1 className="taskManager--title">My Todo Lists</h1>
        <div className="taskManager--addTask">
          <div className="taskManager--addTask__btn">
            <button
              onClick={() => {
                setShowAddTask(true);
              }}
              className="addTask-btn"
            >
              <MdAddTask className="addTask-icon" />
              Add Task
            </button>
          </div>
          <div className="taskManager--addTask__container">
            {showAddTask && (
              <AddTaskForm
                onAdd={handleAddTask}
                onHideAddTask={() => {
                  setShowAddTask(false);
                }}
              />
            )}
          </div>
        </div>
        {/*<div>*/}
        {/*  <TaskTable />*/}
        {/*</div>*/}
        {cloud_tasks && cloud_tasks.length > 0 && (
          <div className="container-fluid px-5 taskManager--grid">
            <div className="row">
              <div className="col order-1">
                <div className="row">
                  <TaskList
                    tasks={cloud_tasks.filter(
                      (task) => task.category === "Personal"
                    )}
                    category={"Personal"}
                  />
                </div>
              </div>
              <div className="col order-2">
                <div className="row">
                  <TaskList
                    tasks={cloud_tasks.filter(
                      (task) => task.category === "Work"
                    )}
                    category={"Work"}
                  />
                </div>
              </div>
              <div className="col order-3">
                <div className="row">
                  <TaskList
                    tasks={cloud_tasks.filter(
                      (task) => task.category === "Study"
                    )}
                    category={"Study"}
                  />
                </div>
              </div>
              <div className="col order-4">
                <div className="row">
                  <TaskList
                    tasks={cloud_tasks.filter(
                      (task) => task.category === "Others"
                    )}
                    category={"Others"}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
