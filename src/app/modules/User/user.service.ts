import { User } from './user.model';
import { TUser } from './user.type';

const createUserIntoDB = async (user: TUser) => {
  const createdUser = await User.create(user);

  return createdUser;
};

export const UserServices = {
  createUserIntoDB,
};
