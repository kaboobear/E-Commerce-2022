import { sequelize } from "./database/db";
import express, { Request, Response } from "express";
import { rootRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bootstrap = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Postgres was connected (Sequelize)");
  } catch (error) {
    console.log("Postgres connection failed (Sequelize)", error);
  }

  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: "API working well" });
  });

  app.use("/", rootRouter);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
};

bootstrap();
