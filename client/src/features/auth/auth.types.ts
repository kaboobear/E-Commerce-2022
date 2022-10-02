import { Role } from 'services/enums/role.enum';

export interface UserData {
  id: number;
  username: string;
  email: string;
  role: Role;
}
