import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { ListUsersController } from '../../../../modules/users/useCases/listUsers/ListUsersController';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.get('/', listUsersController.handle);
usersRoutes.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8),
    },
  }),
  createUserController.handle,
);

export { usersRoutes };
