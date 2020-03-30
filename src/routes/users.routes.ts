import UserController from '../controllers/user.controller';
import { Router } from 'express';
import { authHandler } from '../midlewares/auth.handler';

const routes = Router();

routes.get('/', authHandler, UserController.getUsers);

routes.get('/:id', authHandler, UserController.getUser);

routes.post('/', authHandler, UserController.addUser);

routes.patch('/', authHandler, UserController.updateUser);

export default routes;
