import { IsEmail, IsString, Length } from "class-validator";
import { Role } from "enums/role.enum";

export class CreateUserBodyDto {
  @IsString()
  @IsEmail()
  @Length(8, 64)
  email: string;

  @IsString()
  @Length(4, 32)
  username: string;

  @IsString()
  @Length(8, 64)
  password: string;

  role: Role;
}

export class RegisterResponseDto {
  id: number;
  email: string;
  username: string;
  role: Role;
}

export class UpdateUserBodyDto {
  @IsString()
  @IsEmail()
  @Length(8, 64)
  email: string;

  @IsString()
  @Length(4, 32)
  username: string;

  role: Role;
}
