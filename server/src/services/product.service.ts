import { SortValues } from 'enums/sort.enum';
import { AppDataSource } from 'database/data-source';
import { Product } from 'database/entity/Product';
import {
  Between,
  FindManyOptions,
  FindOptionsWhere,
  In,
  Like,
  MoreThan,
} from 'typeorm';
import {
  CreateProductBodyDto,
  GetProductsQueryDto,
  GetProductsResponseDto,
} from 'dto/product.dto';
import { Service } from 'iterfaces/service.interface';

class ProductService implements Service<Product> {
  public repository = AppDataSource.getRepository(Product);
  private LIMIT = 6;

  public list = async (
    query: GetProductsQueryDto,
  ): Promise<GetProductsResponseDto> => {
    const page = Number(query.page) || 1;
    const offset = (page - 1) * this.LIMIT;

    const options: FindManyOptions<Product> = {
      take: this.LIMIT,
      skip: offset,
    };
    if (query.sort) {
      const orderOptions = SortValues[query.sort];
      options.order = {
        [orderOptions.column]: orderOptions.order,
      };
    }
    const where = this.getWhereOptionsFromQuery(query);
    options.where = where;

    const products = await this.repository.find({
      ...options,
      select: ['id', 'title', 'description', 'image', 'price'],
    });

    const productsCount = await this.repository.count({ where });
    const pagesCount = Math.ceil(productsCount / this.LIMIT);

    return { pages: pagesCount, products };
  };

  public retrieveById = async (id: number): Promise<Product> => {
    const product = await this.repository.findOneBy({ id });

    //todo: add error

    return product;
  };

  public create = async (body: CreateProductBodyDto): Promise<Product> => {
    const product = this.repository.create(body);
    return this.repository.save(product);
  };

  private getWhereOptionsFromQuery = (
    query: GetProductsQueryDto,
  ): FindOptionsWhere<Product> => {
    let where: FindOptionsWhere<Product> = {};
    if (query.category) {
      where.category = In(query.category.split(','));
    }
    if (query.search) {
      where.title = Like(`%${query.search}%`);
    }
    if (query.price) {
      const priceRange = query.price.split('-');

      if (priceRange.length === 1) {
        where.price = MoreThan(Number(priceRange[0]));
      }

      if (priceRange.length === 2) {
        where.price = Between(Number(priceRange[0]), Number(priceRange[1]));
      }
    }
    return where;
  };
}

export { ProductService };
