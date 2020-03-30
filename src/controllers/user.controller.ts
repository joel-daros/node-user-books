import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user.model';
import { ValidationError } from 'objection';

export default class User {
  static async getUsers(req: Request, res: Response) {
    const query = UserModel.query();

    // retorna os livros das pessoass
    if (req.query.withBooks) {
      query.withGraphJoined('books');
    }

    res.status(200).send(await query);
  }

  static async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserModel.query().where('id', req.params.id);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    const { oldPassword, passwordHash } = req.body;

    if (passwordHash && !oldPassword) {
      return next(
        new ValidationError({
          statusCode: 401,
          type: 'Generic',
          message: `Para trocar a senha é preciso informar a nova e a antiga`
        })
      );
    }

    // buscando dados atuais do usuário
    let user;
    try {
      user = await UserModel.query()
        .findById(res.locals.jwtPayload.id)
        .first();
    } catch (error) {
      next(error);
    }

    // verificar se a oldPassword bate com a senha atual
    if (passwordHash && !UserModel.checkPassword(oldPassword, user.passwordHash)) {
      return next(
        new ValidationError({ statusCode: 401, type: 'Generic', message: 'Senha antiga Inválida' })
      );
    }

    // removendo a entrada temporária antes de fazer o patch
    delete req.body.oldPassword;

    try {
      const numUpdated = await UserModel.query()
        .findById(res.locals.jwtPayload.id)
        .patch(req.body);

      res.status(200).send({ sucess: numUpdated });
    } catch (error) {
      next(error);
    }
  }

  static async addUser(req: Request, res: Response, next: NextFunction) {
    try {
      const insertGraph = await UserModel.transaction(async trx => {
        // verificar se o usuário já existe antes de fazer o insert
        // const user = await UserModel.query(trx).findById(parseInt(req.body.id));

        // if (!user) {
        return UserModel.query(trx)
          .allowGraph('books')
          .insertGraph(req.body);
        // } else {
        //   res.status(400).send({ error: 'User already exists' });
        // }
      });
      res.status(200).send(insertGraph);
    } catch (error) {
      next(error);
    }
  }
}
