import React, { useState, useEffect } from 'react';
import AddTaskForm from './addTask';
import EditTaskForm from '../tasks/editTasks';
import DeleteTaskButton from '../tasks/deleteTasks';
import sortTasks from './sortTasks';
import ViewTasks from './viewTasks';

const TaskManager = () => {
