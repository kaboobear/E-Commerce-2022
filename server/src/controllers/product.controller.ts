import { plainToInstance } from 'class-transformer';
import { NextFunction, Request, Response, Router } from 'express';
import validationMiddleware from 'middlewares/validation.middleware';
import { CreateProductBodyDto, GetProductsQueryDto } from 'dto/product.dto';
import { Controller } from 'iterfaces/controller.interface';
import { ProductService } from 'services/product.service';

class ProductConroller implements Controller {
  public path = '/products';
  public router = Router();
  public service = new ProductService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const routes = Router();
    routes.post('/', validationMiddleware(CreateProductBodyDto), this.create);
    routes.get('/', this.list);
    this.router.use(this.path, routes);
  }

  private list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = plainToInstance(GetProductsQueryDto, req.query);
      const { products, pages } = await this.service.list(query);

      res.send({
        products,
        pages,
      });
    } catch (error) {
      next(error);
    }
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = plainToInstance(CreateProductBodyDto, req.body);
      const product = await this.service.create(body);

      res.json(product);
    } catch (error) {
      next(error);
    }
  };
}

export { ProductConroller };
