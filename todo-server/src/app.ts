import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { requestLoggerMiddleware }  from './request.logger.middleware';
import { todoRoutes } from './todo.controller';

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(requestLoggerMiddleware);
app.use(todoRoutes);

export { app };