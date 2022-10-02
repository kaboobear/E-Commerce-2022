import { Request, Response, Router, NextFunction } from 'express';
import { Controller } from 'iterfaces/controller.interface';
import authMiddleware from 'middlewares/auth-jwt.middleware';
import { RequestWithUser } from 'iterfaces/request-with-user.interface';
import { AuthService } from 'services/auth.service';
import {
  ChangePasswordBodyDto,
  LoginBodyDto,
  ResetPasswordBodyDto,
  ResetPasswordRequestBodyDto,
} from 'dto/auth.dto';
import { plainToInstance } from 'class-transformer';
import validationMiddleware from 'middlewares/validation.middleware';
import { ONE_DAY } from 'helpers/tokenable';
import { UnautorizedException } from 'exceptions/UnauthorizedException';

class AuthConroller implements Controller {
  public path = '/auth';
  public router = Router();
  private service = new AuthService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const routes = Router();
    routes.post(
      '/reset-password-request',
      validationMiddleware(ResetPasswordRequestBodyDto),
      this.resetPasswordRequest,
    );
    routes.post(
      '/reset-password',
      validationMiddleware(ResetPasswordBodyDto),
      this.resetPassword,
    );
    routes.post('/login', validationMiddleware(LoginBodyDto), this.login);
    routes.get('/confirm-email/:token', this.confirmEmail);
    routes.post('/logout', this.logout);
    routes.post(
      '/change-password',
      [authMiddleware, validationMiddleware(ChangePasswordBodyDto)],
      this.changePassword,
    );
    this.router.use(this.path, routes);
  }

  private login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = plainToInstance(LoginBodyDto, req.body);

      const loggedInUser = await this.service.login(body);
      const tokenData = this.service.createToken(loggedInUser.id, ONE_DAY);

      res.cookie('Authorization', tokenData.token, {
        maxAge: tokenData.expiresIn * 1000,
        httpOnly: true,
      });
      res.send(loggedInUser);
    } catch (error) {
      next(error);
    }
  };

  private logout = (req: Request, res: Response) => {
    res.cookie('Authorization', '', { maxAge: 0 });
    res.send(200);
  };

  private confirmEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.params.token;
      if (!token) {
        next(new UnautorizedException('Authentication token missing'));
      }

      await this.service.confirmEmail(token);
      const clientURL = process.env.CLIENT_URL;
      res.redirect(`${clientURL}/emailConfirmed`);

      res.send(200);
    } catch (error) {
      next(error);
    }
  };

  private resetPasswordRequest = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const body = plainToInstance(ResetPasswordRequestBodyDto, req.body);
      await this.service.resetPasswordRequest(body);

      res.send(200).send();
    } catch (error) {
      next(error);
    }
  };

  private resetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const body = plainToInstance(ResetPasswordBodyDto, req.body);
      await this.service.resetPassword(body);

      res.send(200);
    } catch (error) {
      next(error);
    }
  };

  private changePassword = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const id = req.user.id;
      const body = plainToInstance(ChangePasswordBodyDto, req.body);
      this.service.changePassword({ id, body });

      res.send(200);
    } catch (error) {
      next(error);
    }
  };
}

export { AuthConroller };
