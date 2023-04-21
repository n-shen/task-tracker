import express from "express";
import validAuth from "../middleware/validAuth.js";
import {
  getTasks,
  postTasks,
  destroyTask,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

// taskRouter.use(validAuth);

taskRouter.post("/fetch", getTasks);

taskRouter.post("/create", postTasks);

taskRouter.delete("/destroy/:tid", destroyTask);

export default taskRouter;
