import { AppDataSource } from "../database/data-source";
import { User } from "../database/entity/User";
import { Role } from "../enums/role.enum";
import { NotFoundException } from "../exceptions/NotFoundException";
import { Service } from "../iterfaces/service.interface";
import * as os from "os";
import {
  CreateUserBodyDto,
  RegisterResponseDto,
  UpdateUserBodyDto,
} from "../dto/user.dto";
import { BadRequestException } from "../exceptions/BadRequestException";
import { TEN_YEARS, Tokenable } from "../helpers/tokenable";
import { MailService } from "../mail/mail.service";

class UserService extends Tokenable implements Service<User> {
  public repository = AppDataSource.getRepository(User);
  private mailService = new MailService();

  initUser = async (id: number): Promise<User> => {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  };

  list = async (): Promise<User[]> => {
    const users = await this.repository.find({
      // select: ["id", "username", "email", "role"],
    });

    return users;
  };

  retrieveById = async (id: number): Promise<User> => {
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

    const user = new User();
    user.username = username;
    user.password = password;
    user.email = email;
    user.role = role;

    user.hashPassword();

    const newUser = await this.repository.save(user);

    const confirmationTokenData = this.createToken(newUser.id, TEN_YEARS);

    const serverUrl = process.env.SERVER_URL;
    this.mailService.sendConfirmationMail({
      recipient: newUser.email,
      username: newUser.username,
      link: `${serverUrl}/auth/confirm-email/${confirmationTokenData.token}`,
    });

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

    const user = await this.repository.findOneBy({ id });
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
