export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequestBody {
  email: string;
}

export interface ResetPasswordBody {
  id: number;
  password: string;
  token: string;
}
