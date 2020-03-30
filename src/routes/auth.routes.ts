import Auth from '../controllers/auth.controller';
import { Router } from 'express';

const routes = Router();

// Login route
routes.post('/login', Auth.login);

export default routes;
