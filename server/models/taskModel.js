import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    fk_user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

taskSchema.statics.getTasks = async function (task_user) {
  if (!task_user) throw Error("Missing required fields!");

  return await this.find();
};

taskSchema.statics.newTask = async function (
  task_title,
  task_description,
  task_status,
  task_deadline,
  task_category,
  task_user
) {
  if (
    !task_title ||
    !task_description ||
    !task_status ||
    !task_deadline ||
    !task_user
  )
    throw Error("Missing required fields!");

  return await this.create({
    title: task_title,
    description: task_description,
    status: parseInt(task_status, 10),
    deadline: task_deadline,
    category: task_category,
    fk_user: task_user,
  });
};

const Task = mongoose.model("Task", taskSchema);

export { Task };
