import 'dotenv/config';
import { DataSource } from 'typeorm';

export const connectionDB = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  migrations: ['./src/shared/infra/database/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
});

connectionDB
  .initialize()
  .then(() => console.log('Database postgreSQL connected successfully'))
  .catch((error) => console.log(error));
