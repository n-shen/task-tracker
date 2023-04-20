import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";

dotenv.config();

const server_port = process.env.PORT_NUM;
const app = express();

// app.use(express.static("build"));

app.use(cors());
app.use(express.json());

// Routers
import authRouter from "./routes/authRouter.js";
import taskRouter from "./routes/taskRouter.js";
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/task", taskRouter);

app.listen(server_port, () => {
    console.log("TL-Server is running on port: " + server_port);
});