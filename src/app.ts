import express from 'express';
import logger from 'morgan';
import Routes from './routes';
import { knex } from './config/db';
import helmet from 'helmet';
import { errorHandler } from './midlewares/error.handler';
import { Model } from 'objection';

const port = 3000;
const app = express();

Model.knex(knex);

// midlewaresss
app.use(logger('dev'));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use('/api', Routes);
app.use(errorHandler);

app.get('*', (req, res) => {
  res.status(200).send({ message: 'Welcom to default API Route of my app' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});
