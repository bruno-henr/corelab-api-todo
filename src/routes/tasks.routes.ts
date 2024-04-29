import { createTaskController } from '@useCases/task/create';
import Express from 'express';
import { validateRequest } from '@utils/validateRequest'
import { handleValidationErrors } from '@utils/handleValidationErrors';
import { editTaskController } from '@useCases/task/edit';
import { listTaskController } from '@useCases/task/list';
export const task_router = Express.Router();

task_router.post('/task',
    validateRequest('createTask'),
    handleValidationErrors, // captura e verifica se houve erros na validação :)
    createTaskController.handle.bind(createTaskController)
);

task_router.put('/task',
    validateRequest('editTask'),
    handleValidationErrors,
    editTaskController.handle.bind(editTaskController)
)
task_router.get('/task',
    listTaskController.handle.bind(listTaskController)
)