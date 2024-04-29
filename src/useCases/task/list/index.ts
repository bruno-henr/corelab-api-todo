import { PostgreSQLTaskRepository } from '@implementations/PostgreSQLTaskRepository';
import { ListTaskController } from './controller';
import { ListTaskUseCase } from './useCase';

const postgreSLTaskRepository = new PostgreSQLTaskRepository();
const listTaskUseCase = new ListTaskUseCase(postgreSLTaskRepository);
const listTaskController = new ListTaskController(listTaskUseCase);

export { listTaskController } 
