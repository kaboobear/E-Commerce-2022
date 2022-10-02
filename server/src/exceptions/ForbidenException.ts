import { HttpException } from './HttpException';

class ForbidenException extends HttpException {
  constructor(message: string = 'Forbiden') {
    super(403, message);
  }
}

export { ForbidenException };
