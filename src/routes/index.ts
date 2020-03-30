import UserRoutes from './users.routes';
import AuthRoutes from './auth.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', UserRoutes);
routes.use('/auth', AuthRoutes);

export default routes;
