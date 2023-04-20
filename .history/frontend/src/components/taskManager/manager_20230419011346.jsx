import React, { useState, useEffect } from 'react';
import AddTaskForm from './addTask';
import EditTaskForm from './editTasks';
import DeleteTaskButton from './deleteTasks';
import sortTasks from '../taskManager/sortTasks';

const TaskList = ({ tasks }) => {
