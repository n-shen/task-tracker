import express from "express";
import validAuth from "../middleware/validAuth.js";
import { getTasks } from "../controllers/task.controller.js";

const taskRouter = express.Router();

// taskRouter.use(validAuth);
taskRouter.get("/all", getTasks);

export default taskRouter;
