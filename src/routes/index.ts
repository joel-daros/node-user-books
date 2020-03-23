import User from '../controllers/users';
import { Express } from 'express';

export default (app: Express) => {
  app.get('/api/users', (req, res) => User.getUsers(req, res));

  app.get('/api/users/:id', (req, res, next) => User.getUser(req, res, next));

  app.post('/api/users', (req, res, next) => User.addUser(req, res, next));

  app.patch('/api/users/:id', (req, res, next) => User.updateUser(req, res, next));
  //
  app.get('*', (req, res) => {
    res.status(200).send({ message: 'Welcom to default API Route of my app' });
  });
};
