import express from 'express';
import { router } from 'src/routes';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use("/v1/api", router)
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) 
})