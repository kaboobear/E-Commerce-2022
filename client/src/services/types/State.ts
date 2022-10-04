import { ResponseError } from './Errors';
import { Status } from './Status';

export interface StateWithoutData {
  status: Status;
  error: ResponseError | null;
}

export interface State<T> extends StateWithoutData {
  data: T;
}

export interface StateWithMode<T, K> extends StateWithoutData {
  data: T;
  mode: K;
}
