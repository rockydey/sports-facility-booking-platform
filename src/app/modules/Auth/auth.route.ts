import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginUserValidationSchema),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
