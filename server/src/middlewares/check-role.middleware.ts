import { AppDataSource } from 'database/data-source';
import { Response, NextFunction } from 'express';
import { User } from 'database/entity/User';
import { Role } from 'enums/role.enum';
import { RequestWithUser } from 'iterfaces/request-with-user.interface';
import { ForbidenException } from 'exceptions/ForbidenException';
import { UnautorizedException } from 'exceptions/UnauthorizedException';

const userRepository = AppDataSource.getRepository(User);

export const checkRole = (roles: Array<Role>) => {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const id = req.user.id;
    const user = await userRepository.findOneBy({ id });
    if (!user) {
      next(new UnautorizedException());
    }

    if (roles.indexOf(user.role) > -1) next();
    else next(new ForbidenException());
  };
};
