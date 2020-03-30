import User from '../controllers/user.controller';
import { Router } from 'express';
import { authHandler } from '../midlewares/auth.handler';

const routes = Router();

routes.get('/', authHandler, User.getUsers);

routes.get('/:id', authHandler, User.getUser);

routes.post('/', authHandler, User.addUser);

routes.patch('/', authHandler, User.updateUser);

export default routes;
