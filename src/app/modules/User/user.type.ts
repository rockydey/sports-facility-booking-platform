/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
};

export interface UserModel extends Model<TUser> {
  isUserExists(id: string): Promise<TUser>;
}
