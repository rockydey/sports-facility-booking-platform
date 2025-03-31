import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';

const router = Router();

router.post(
  '/signup',
  validateRequest(UserValidation.createUserSchemaValidation),
  UserControllers.createUser,
);

export const UserRoutes = router;
