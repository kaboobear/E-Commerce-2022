import { User } from '../entity/User';
import { setSeederFactory } from 'typeorm-extension';

export const UserFactory = setSeederFactory(User, (faker) => {
  const user = new User();
  user.password = '123123nko';
  user.hashPassword();

  return user;
});
