import { body } from 'express-validator';

export const validateRequest = (method: string) => {
    switch (method) {
        case 'createTask': {
            return [
                body('title', 'Não foi informado o titulo da tarefa.').exists(),
                body('content', 'A tarefa precisa ter uma descrição.').exists(),
                body('color', 'A tarefa precisa ter uma cor padrão.').exists(),
                body('favorite').optional().isBoolean()
            ]
        }
        case 'editTask': {
            return [
                body('id', 'ID é obrigatório para edição de uma tarefa').exists().isString(),
                body('title').optional().isString(),
                body('content').optional().isString(),
                body('color').optional().isString(),
                body('favorite').optional().isBoolean()
            ]
        }
    }
}