import axios, { AxiosInstance } from "axios";

export class ApiBaseService {
  apibase: AxiosInstance;

  constructor() {
    this.apibase = axios.create({
      baseURL: "/api",
    });
  }
}
