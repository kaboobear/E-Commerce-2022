import { ApiBaseService } from 'api/apibase.service';
import { AxiosPromise } from 'axios';
import {
  ProductsWithPagesCount,
  Product,
  ProductFormData,
} from 'features/product/products.types';
import { ProductParams } from './types';

class ProductApiService extends ApiBaseService {
  getProducts(params: ProductParams): AxiosPromise<ProductsWithPagesCount> {
    return this.apibase.get('/products', { params });
  }

  createProduct(data: ProductFormData): AxiosPromise<Product> {
    return this.apibase.post('/products', data);
  }
}

const productApiService = new ProductApiService();
export { productApiService };
