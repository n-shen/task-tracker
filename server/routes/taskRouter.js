import express from "express";
import validAuth from "../middleware/validAuth.js";
import {
  getTasks,
  postTasks,
  updateTasks,
  destroyTask,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.use(validAuth);

taskRouter.post("/fetch", getTasks);

taskRouter.post("/create", postTasks);

taskRouter.post("/update", updateTasks);

taskRouter.delete("/destroy/:tid", destroyTask);

export default taskRouter;
