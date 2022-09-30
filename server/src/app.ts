import { AppDataSource } from "./database/data-source";
import express from "express";
import { Controller } from "./iterfaces/controller.interface";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    const PORT = process.env.PORT || 5000;

    this.app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(loggerMiddleware);
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private connectToTheDatabase() {
    AppDataSource.initialize()
      .then(async () => {
        console.log("Postgres was connected");
      })
      .catch((error) =>
        console.log("Postgres connection failed. Error: ", error)
      );
  }
}

export { App };
