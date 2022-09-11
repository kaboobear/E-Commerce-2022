import { Status } from "./Status";

export interface StateWithoutData {
  status: Status;
  error: string | null;
}

export interface State<T> extends StateWithoutData {
  data: T;
}
