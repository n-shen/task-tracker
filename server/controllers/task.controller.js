import { Task } from "../models/taskModel.js";

export async function getTasks(req, res) {
  res.json({
    success: true,
    message: "Task's data fetched successfully!",
    tasks: { title: "hello" },
  });
}

export async function postTasks(req, res) {
  const {
    taskTitle,
    taskDescription,
    taskStatus,
    taskDeadline,
    taskCategory,
    taskUser,
  } = req.body;

  try {
    const taskProfile = await Task.newTask(
      taskTitle,
      taskDescription,
      taskStatus,
      taskDeadline,
      taskCategory,
      taskUser
    );

    res.json({
      success: true,
      message: "New task created!",
      task: taskProfile,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
}
