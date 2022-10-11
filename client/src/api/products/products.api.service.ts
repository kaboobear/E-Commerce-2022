import { ApiBaseService } from 'api/apibase.service';
import { AxiosPromise } from 'axios';
import {
  ProductsWithPagesCount,
  ProductFormData,
  CatalogProduct,
} from 'features/products/products.types';
import { ProductParams } from './types';

class ProductsApiService extends ApiBaseService {
  getProducts(params: ProductParams): AxiosPromise<ProductsWithPagesCount> {
    return this.apibase.get('/products', { params });
  }

  createProduct(data: ProductFormData): AxiosPromise<CatalogProduct> {
    return this.apibase.post('/products', data);
  }
}

const productsApiService = new ProductsApiService();
export { productsApiService };
