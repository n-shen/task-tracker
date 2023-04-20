import { Task } from "../models/taskModel.js";

export async function getTasks(req, res) {
  res.json({
    success: true,
    message: "Task's data fetched successfully!",
  });
}
