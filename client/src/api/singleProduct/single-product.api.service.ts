import { ApiBaseService } from 'api/apibase.service';
import { AxiosPromise } from 'axios';
import { SingleProduct } from 'features/single-product/single-product.types';

class SingleProductApiService extends ApiBaseService {
  getSingleProduct({ id }: { id: number }): AxiosPromise<SingleProduct> {
    return this.apibase.get(`/products/${id}`);
  }
}

const singleProductApiService = new SingleProductApiService();
export { singleProductApiService };
