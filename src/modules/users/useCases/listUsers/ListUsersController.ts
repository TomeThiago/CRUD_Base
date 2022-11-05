import { Request, Response } from 'express';
import { UsersRepository } from '../../infra/typeorm/repositories/UsersRepository';
import { UserResponse } from '../../dtos/response/UserReponse';
import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const usersRepository = new UsersRepository();

    const listUsersUseCase = new ListUsersUseCase(usersRepository);

    const users = await listUsersUseCase.execute();

    return response.json(users.map((user) => new UserResponse(user)));
  }
}
