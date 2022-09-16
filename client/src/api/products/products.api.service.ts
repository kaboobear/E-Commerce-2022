import { ApiBaseService } from "api/apibase.service";
import { AxiosResponse } from "axios";
import {
  ProductsWithPagesCount,
  Product,
  ProductFormData,
} from "features/product/products.types";
import { ProductParams } from "./types";

class ProductApiService extends ApiBaseService {
  getProducts(
    params: ProductParams
  ): Promise<AxiosResponse<ProductsWithPagesCount>> {
    return this.apibase.get("/products", { params });
  }

  createProduct(data: ProductFormData): Promise<AxiosResponse<Product>> {
    return this.apibase.post("/products", data);
  }
}

const productApiService = new ProductApiService();
export { productApiService };
