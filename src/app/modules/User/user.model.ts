import { model, Schema } from 'mongoose';
import { TUser } from './user.type';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

export const User = model<TUser>('User', userSchema);
