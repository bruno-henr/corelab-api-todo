import express from 'express';
import { router } from 'src/routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

export const app = express();


app.use(express.json());
app.use(cors({ origin: '*' }));
app.use("/v1/api", router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    options: { explorer: true }
}));
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1)
})