import { HttpException } from "./HttpException";

class UnautorizedException extends HttpException {
  constructor(message: string = "Unauthorized") {
    super(401, message);
  }
}

export { UnautorizedException };
