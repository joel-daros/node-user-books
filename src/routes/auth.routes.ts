import AuthController from '../controllers/auth.controller';
import { Router } from 'express';

const routes = Router();

// Login route
routes.post('/login', AuthController.login);

export default routes;
