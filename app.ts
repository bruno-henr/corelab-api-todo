import express from 'express';
import { ExpressValidator } from 'express-validator';
import { router } from 'src/routes';

export const app = express();
app.use(express.json());
app.use("/v1/api", router)

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) 
})