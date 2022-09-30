import { AppDataSource } from "../database/data-source";
import { NextFunction, Response } from "express";
import DataStoredInToken from "../iterfaces/data-stored-in-token";
import { RequestWithUser } from "../iterfaces/request-with-user.interface";
import jwt from "jsonwebtoken";
import { User } from "../database/entity/User";
import { UnautorizedException } from "../exceptions/UnauthorizedException";

const repository = AppDataSource.getRepository(User);

async function authMiddleware(
  request: RequestWithUser,
  response: Response,
  next: NextFunction
) {
  try {
    const cookies = request.cookies;
    if (!cookies || !cookies.Authorization) {
      next(new UnautorizedException("Authentication token missing"));
    }

    const secret = process.env.JWTSECRET;
    const dataStoredInToken = jwt.verify(
      cookies.Authorization,
      secret
    ) as DataStoredInToken;
    const id = dataStoredInToken.id;
    const user = await repository.findOneBy({ id });
    if (!user) {
      next(new UnautorizedException("Wrong authentication token"));
    }
    request.user = user;
    next();
  } catch (error) {
    next(new UnautorizedException());
  }
}

export default authMiddleware;
