import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = Router();

router.post(
  '/signup',
  validateRequest(UserValidation.createUserSchemaValidation),
);

export const UserRoutes = router;
