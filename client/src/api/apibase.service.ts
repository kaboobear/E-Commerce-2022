import axios, { AxiosError, AxiosInstance } from 'axios';
import { ResponseError } from 'services/types/Errors';

export class ApiBaseService {
  apibase: AxiosInstance;

  constructor() {
    this.apibase = axios.create({
      baseURL: '/api',
    });
    this.apibase.interceptors.response.use(
      (response) => response,
      (err: AxiosError): Promise<ResponseError> => {
        const error = err.response?.data as ResponseError;
        return Promise.reject(error);
      },
    );
  }
}
