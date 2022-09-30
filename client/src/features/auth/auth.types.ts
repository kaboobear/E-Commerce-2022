import { Role } from "enums/role.enum";

export interface UserData {
  id: number;
  username: string;
  email: string;
  role: Role;
}
