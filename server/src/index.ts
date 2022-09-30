import { App } from "./app";
import { ProductConroller } from "./controllers/product.controller";
import { AuthConroller } from "./controllers/auth.controller";
import { UserConroller } from "./controllers/user.controller";
import { AppConroller } from "./controllers/app.controller";

const app = new App([
  new AppConroller(),
  new ProductConroller(),
  new AuthConroller(),
  new UserConroller(),
]);

app.listen();
