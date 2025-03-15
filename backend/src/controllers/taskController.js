import { PrismaClient } from '@prisma/client';
import { AppError } from '../middleware/errorHandler.js';

const prisma = new PrismaClient();

// Get all tasks
export const getAllTasks = async (req, res) => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};

// Get a single task
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  
  const task = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  
  if (!task) {
    throw new AppError(`Task not found with id: ${id}`, 404);
  }
  
  res.status(200).json({
    success: true,
    data: task,
  });
};

// Create a new task
export const createTask = async (req, res) => {
  const { title } = req.body;
  
  if (!title || title.trim() === '') {
    throw new AppError('Task title is required', 400);
  }
  
  const task = await prisma.task.create({
    data: {
      title,
    },
  });
  
  res.status(201).json({
    success: true,
    data: task,
  });
};

// Update a task
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  
  // Check if task exists
  const existingTask = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  
  if (!existingTask) {
    throw new AppError(`Task not found with id: ${id}`, 404);
  }
  
  // Update the task
  const updatedTask = await prisma.task.update({
    where: { id: Number(id) },
    data: {
      ...(title !== undefined && { title }),
      ...(completed !== undefined && { completed }),
    },
  });
  
  res.status(200).json({
    success: true,
    data: updatedTask,
  });
};

// Delete a task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  
  // Check if task exists
  const existingTask = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  
  if (!existingTask) {
    throw new AppError(`Task not found with id: ${id}`, 404);
  }
  
  // Delete the task
  await prisma.task.delete({
    where: { id: Number(id) },
  });
  
  res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
  });
};
