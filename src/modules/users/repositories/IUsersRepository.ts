import { ICreateUser } from '../dtos/request/ICreateUser';
import { User } from '../infra/typeorm/entities/User';

export interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
}
