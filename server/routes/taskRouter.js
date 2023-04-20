import express from "express";
import {
    getTasks,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/all", getTasks);

export default taskRouter;