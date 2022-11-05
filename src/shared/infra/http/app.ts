import { errors } from 'celebrate';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../../../../swagger.json';

import { AppError } from '../../errors/AppError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    console.log(error.message);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

export { app };
