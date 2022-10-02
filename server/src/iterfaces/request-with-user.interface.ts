import { User } from 'database/entity/User';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: User;
}

export { RequestWithUser };
