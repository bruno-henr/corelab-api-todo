import Express from 'express';
import { task_router } from './tasks.routes';

export const router = Express.Router();

router.use(task_router);