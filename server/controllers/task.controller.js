import { Task } from "../models/taskModel.js";

export async function getTasks(req, res) {
  try {
    const { taskUser } = req.body;
    const taskCollections = await Task.getTasks(taskUser);

    res.json({
      success: true,
      message: "Task collections fetched!",
      tasks: taskCollections,
      user: taskUser,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
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
