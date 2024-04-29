import { PostgreSQLTaskRepository } from '@implementations/PostgreSQLTaskRepository';
import { CreateTaskController } from './controller';
import { CreateTaskUseCase } from './useCase';

const postgreSLTaskRepository = new PostgreSQLTaskRepository();
const createTaskUseCase = new CreateTaskUseCase(postgreSLTaskRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController } 
