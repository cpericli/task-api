import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll(options);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
