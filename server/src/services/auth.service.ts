import { AppDataSource } from "../database/data-source";
import { User } from "../database/entity/User";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { Service } from "../iterfaces/service.interface";
import {
  ChangePasswordBodyDto,
  LoginBodyDto,
  LoginResponseDto,
  ResetPasswordBodyDto,
  ResetPasswordRequestBodyDto,
} from "dto/auth.dto";
import { NotFoundException } from "../exceptions/NotFoundException";
import { UnautorizedException } from "../exceptions/UnauthorizedException";
import { MailService } from "../mail/mail.service";
import { getUtcIsoTime } from "../utils/getUtcIsoTime";
import { BadRequestException } from "../exceptions/BadRequestException";
import { Tokenable } from "../helpers/tokenable";

class AuthService extends Tokenable implements Service<User> {
  public repository = AppDataSource.getRepository(User);
  private mailService = new MailService();

  public login = async (body: LoginBodyDto): Promise<LoginResponseDto> => {
    const { password, email } = body;
    const user = await this.repository.findOneBy({ email });

    if (!user) {
      throw new UnautorizedException("Wrong credentials provided");
    }
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      throw new UnautorizedException("Wrong credentials provided");
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  };

  public resetPasswordRequest = async (body: ResetPasswordRequestBodyDto) => {
    const { email } = body;

    let user = await this.repository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException("User with this email not found");
    }

    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = bcrypt.hashSync(resetToken, 8);

    user.token = hash;
    user.tokenExpirationTime = getUtcIsoTime({ plusHours: 1 });
    await this.repository.save(user);

    const clientURL = "http://localhost:3000";
    const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user.id}`;

    this.mailService.sendPasswordResetMail({
      recipient: email,
      username: user.username,
      link,
    });
  };

  public resetPassword = async (body: ResetPasswordBodyDto) => {
    const { password, token, id } = body;

    let user = await this.repository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException("User not found");
    }

    const isTokenExpired = user.tokenExpirationTime < getUtcIsoTime({});
    if (isTokenExpired) {
      throw new BadRequestException("Time to reset your password is expired");
    }

    const isValid = await bcrypt.compare(token, user.token);
    if (!isValid || !user.token) {
      throw new BadRequestException("Link for password reseting is wrong");
    }

    user.token = null;
    user.tokenExpirationTime = null;
    user.password = password;
    user.hashPassword();

    await this.repository.save(user);
  };

  public changePassword = async ({
    id,
    body,
  }: {
    id: number;
    body: ChangePasswordBodyDto;
  }) => {
    const { oldPassword, newPassword } = body;

    let user = await this.repository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException("User not found");
    }

    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      throw new BadRequestException("Wrong old password");
    }

    user.password = newPassword;
    user.hashPassword();

    this.repository.save(user);
  };
}

export { AuthService };
