import { Request, Response, Router } from "express";
import { Controller } from "../iterfaces/controller.interface";
import { runSeeders } from "typeorm-extension";
import { AppDataSource } from "../database/data-source";

class AppConroller implements Controller {
  public path = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const routes = Router();
    routes.get("/", this.healthCheck);
    routes.get("/seed", this.seed);
    this.router.use(this.path, routes);
  }

  private healthCheck = (req: Request, res: Response) => {
    res.status(200).send({ message: "API working well" });
  };

  private seed = async (req: Request, res: Response) => {
    try {
      await runSeeders(AppDataSource);
      res.status(200).send({ message: "Seeds added" });
    } catch (err) {
      res.status(500).send({ message: "Error during seeding. " + err });
    }
  };
}

export { AppConroller };
