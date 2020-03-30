import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'objection';
import UserModel from '../models/user.model';
import jwt from 'jsonwebtoken';

export default class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    // checando se o login e a senha estão preenchidos
    if (!(username && password)) {
      res.status(400).send();
    }

    // validando se o usuário existe
    let user: UserModel;

    try {
      user = await UserModel.query()
        .where('username', username)
        .first();
    } catch (error) {
      next(error);
    }

    // se o usuário não existir
    if (!user) {
      return next(
        new ValidationError({
          statusCode: 400,
          type: 'Generic',
          message: 'Usuário não encontrado',
          data: { username }
        })
      );
    }

    // validando se a senha está correta
    if (!user.checkPassword(password)) {
      return next(
        new ValidationError({ statusCode: 401, type: 'Generic', message: 'Senha Inválida' })
      );
    }

    // se deu tudo certo, devolve os dados do usuário logado juntamente com seu token de autenticação
    return res.status(200).send({
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      },
      token: jwt.sign({ id: user.id }, process.env.APP_SECRET, { expiresIn: process.env.EXPIRES })
    });
  }
}
