import { compareSync, hashSync } from 'bcrypt-nodejs';
import { IHashProvider } from '../models/IHashProvider';

export class BcryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hashSync(payload);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compareSync(payload, hashed);
  }
}
