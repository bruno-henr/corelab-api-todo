import { PostgreSQLTaskRepository } from '@implementations/PostgreSQLTaskRepository';
import { EditTaskController } from './controller';
import { EditTaskUseCase } from './useCase';

const postgreSLTaskRepository = new PostgreSQLTaskRepository();
const editTaskUseCase = new EditTaskUseCase(postgreSLTaskRepository);
const editTaskController = new EditTaskController(editTaskUseCase);

export { editTaskController } 
