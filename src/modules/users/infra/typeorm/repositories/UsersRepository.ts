import { Repository } from 'typeorm';
import { ICreateUser } from '../../../dtos/request/ICreateUser';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { connectionDB } from '../../../../../shared/infra/database/typeorm';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = connectionDB.getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const user = this.repository.find();

    return user;
  }

  async create({ name, email, password }: ICreateUser): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    return await this.repository.save(user);
  }
}
