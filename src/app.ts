import express, { NextFunction } from 'express';
import logger from 'morgan';
import routes from './routes';
import { knex } from './config/db';
import { errorHandler } from './midlewares/error.handler';
import { Model } from 'objection';

const port = 3000;
const app = express();

Model.knex(knex);

// midlewaresss
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});
