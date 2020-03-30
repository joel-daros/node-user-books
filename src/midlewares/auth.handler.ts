import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ValidationError } from 'objection';

export const authHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    // separando a literal 'Bearer' do token
    const [, token] = req.headers.authorization.split(' ');

    const jwtPayload = jwt.verify(token, process.env.APP_SECRET);
    // salva localmente o jwtPayload
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return next(
      new ValidationError({
        statusCode: 401,
        type: 'Generic',
        message: `Token Inválido: ${error.message}`
      })
    );
  }

  return next();
};
