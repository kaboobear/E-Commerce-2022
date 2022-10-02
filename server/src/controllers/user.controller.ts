import { NextFunction, Request, Response, Router } from "express";
import { Controller } from "../iterfaces/controller.interface";
import authMiddleware from "../middlewares/auth-jwt.middleware";
import { RequestWithUser } from "../iterfaces/request-with-user.interface";
import { UserService } from "../services/user.service";
import { CreateUserBodyDto, UpdateUserBodyDto } from "../dto/user.dto";
import { plainToInstance } from "class-transformer";
import validationMiddleware from "../middlewares/validation.middleware";
import { ONE_DAY } from "../helpers/tokenable";

class UserConroller implements Controller {
  public path = "/user";
  public router = Router();
  private service = new UserService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const routes = Router();
    routes.get("/init", [authMiddleware], this.initUser);
    routes.get("/", this.list);
    routes.post("/", [validationMiddleware(CreateUserBodyDto)], this.create);
    routes.put(
      "/:id",
      [authMiddleware, validationMiddleware(UpdateUserBodyDto)],
      this.update
    );
    routes.delete("/:id", this.remove);
    routes.get("/:id", this.retrieveById);
    this.router.use(this.path, routes);
  }

  initUser = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.user.id;
      const user = await this.service.initUser(id);

      res.send(user);
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.service.list();
      res.send(users);
    } catch (error) {
      next(error);
    }
  };

  retrieveById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const user = await this.service.retrieveById(id);

      res.send(user);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = plainToInstance(CreateUserBodyDto, req.body);
      const registeredUser = await this.service.create(body);
      const tokenData = this.service.createToken(registeredUser.id, ONE_DAY);

      res.cookie("Authorization", tokenData.token, {
        maxAge: tokenData.expiresIn * 1000,
        httpOnly: true,
      });
      res.send(registeredUser);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const body = plainToInstance(UpdateUserBodyDto, req.body);
      const user = await this.service.update({ body, id });

      res.send(200);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.service.remove(id);

      res.send(200);
    } catch (error) {
      next(error);
    }
  };
}

export { UserConroller };
