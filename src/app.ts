import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/errors/globalErrorHandler';
import notFound from './app/errors/notFound';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from SPORTS FACILITY BOOKING PLATFORM SERVER!');
});

// Global error handle
app.use(globalErrorHandler);

// api not found error
app.use(notFound);

export default app;
