import { AppDataSource } from "../database/data-source";
import { User } from "../database/entity/User";
import { Role } from "../enums/role.enum";
import { NotFoundException } from "../exceptions/NotFoundException";
import { Service } from "../iterfaces/service.interface";
import {
  CreateUserBodyDto,
  RegisterResponseDto,
  UpdateUserBodyDto,
} from "../dto/user.dto";
import { BadRequestException } from "../exceptions/BadRequestException";
import { Tokenable } from "../helpers/tokenable";

class UserService extends Tokenable implements Service<User> {
  public repository = AppDataSource.getRepository(User);

  initUser = async (id: number): Promise<User> => {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  };

  getAll = async (): Promise<User[]> => {
    const users = await this.repository.find({
      select: ["id", "username", "email", "role"],
    });

    return users;
  };

  getOneById = async (id: number): Promise<User> => {
    const user = await this.repository.findOne({
      select: ["id", "username", "role", "email"],
      where: { id },
    });
    return user;
  };

  create = async (body: CreateUserBodyDto): Promise<RegisterResponseDto> => {
    const { username, password, email, role = Role.USER } = body;

    const existingUser = await this.repository.findOneBy({ email });
    if (existingUser) {
      throw new BadRequestException("User with this email is already exist");
    }

    let user = new User();
    user.username = username;
    user.password = password;
    user.email = email;
    user.role = role;

    user.hashPassword();

    const newUser = await this.repository.save(user);
    return {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
    };
  };

  update = async ({
    id,
    body,
  }: {
    id: number;
    body: UpdateUserBodyDto;
  }): Promise<User> => {
    const { username, email, role } = body;

    let user = await this.repository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException("User not found");
    }

    user.username = username;
    user.email = email;
    user.role = role;

    const newUser = await this.repository.save(user);
    if (!newUser) {
      throw new NotFoundException();
    }

    return newUser;
  };

  remove = async (id: number) => {
    const user = await this.repository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException("User not found");
    }
    this.repository.delete(id);
  };
}

export { UserService };
