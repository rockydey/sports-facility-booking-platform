import { z } from 'zod';

const createUserSchemaValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }),
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z
      .string({
        required_error: 'Password is required!',
        invalid_type_error: 'Password must be string!',
      })
      .min(8, { message: 'Password must be at least 8 character long!' }),
    phone: z.string({ required_error: 'Phone is required!' }),
    role: z.enum(['admin', 'user'], { required_error: 'Role is required' }),
    address: z.string({ required_error: 'Address is required!' }),
  }),
});

export const UserValidation = {
  createUserSchemaValidation,
};
