import { ApiBaseService } from "api/apibase.service";
import { AxiosResponse } from "axios";
import { Product, ProductFormData } from "api/products/types/product.interface";

class ProductApiService extends ApiBaseService {
  getProducts(): Promise<AxiosResponse<Product[]>> {
    return this.apibase.get("/products");
  }

  createProduct(data: ProductFormData): Promise<AxiosResponse<Product>> {
    return this.apibase.post("/products", data);
  }
}

const productApiService = new ProductApiService();

export { productApiService };
