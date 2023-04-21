import express from "express";
import validAuth from "../middleware/validAuth.js";
import { getTasks, postTasks } from "../controllers/task.controller.js";

const taskRouter = express.Router();

// taskRouter.use(validAuth);
taskRouter.post("/fetch", getTasks);

taskRouter.post("/create", postTasks);

export default taskRouter;
