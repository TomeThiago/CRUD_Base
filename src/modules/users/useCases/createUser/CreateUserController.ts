import { Request, Response } from 'express';
import { UserResponse } from '../../dtos/response/UserReponse';
import { BcryptHashProvider } from '../../../../shared/container/providers/HashProvider/implementations/BcryptHashProvider';
import { UsersRepository } from '../../infra/typeorm/repositories/UsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const bcryptHashProvider = new BcryptHashProvider();

    const createUserUseCase = new CreateUserUseCase(
      usersRepository,
      bcryptHashProvider,
    );

    const user = await createUserUseCase.execute({ name, email, password });

    return response.status(201).json(new UserResponse(user));
  }
}
