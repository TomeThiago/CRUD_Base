import { IHashProvider } from 'shared/container/providers/HashProvider/models/IHashProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUser } from '../../dtos/request/ICreateUser';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: ICreateUser) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}
