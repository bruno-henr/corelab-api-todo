import Express from 'express';
import { task_router } from './tasks.routes';

 const router = Express.Router();

router.use(task_router);

export default router;