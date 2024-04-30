import { PostgreSQLTaskRepository } from '@implementations/PostgreSQLTaskRepository';
import { RemoveTaskController } from './controller';
import { RemoveTaskUseCase } from './useCase';

const postgreSLTaskRepository = new PostgreSQLTaskRepository();
const removeTaskUseCase = new RemoveTaskUseCase(postgreSLTaskRepository);
const removeTaskController = new RemoveTaskController(removeTaskUseCase);

export { removeTaskController } 
