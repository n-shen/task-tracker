import express from "express";
import {
    getUser,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/sign", getUser);

export default authRouter;