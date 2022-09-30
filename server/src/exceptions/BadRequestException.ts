import { HttpException } from "./HttpException";

class BadRequestException extends HttpException {
  constructor(message: string = "Bad Requst") {
    super(400, message);
  }
}

export { BadRequestException };
