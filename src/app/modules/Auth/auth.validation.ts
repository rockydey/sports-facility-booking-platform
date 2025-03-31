import { z } from 'zod';

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required!' })
      .email({ message: 'Wrong email format!' }),
    password: z.string({ required_error: 'Password is required!' }),
  }),
});

export const AuthValidation = {
  loginUserValidationSchema,
};
