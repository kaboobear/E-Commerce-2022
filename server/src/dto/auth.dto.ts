import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsString, Length } from "class-validator";
import { Role } from "enums/role.enum";

export class LoginBodyDto {
  @IsString()
  @IsEmail()
  @Length(8, 64)
  email: string;

  @IsString()
  @Length(8, 64)
  password: string;
}

export class LoginResponseDto {
  id: number;
  email: string;
  username: string;
  role: Role;
}

export class ChangePasswordBodyDto {
  @IsString()
  @Length(8, 64)
  oldPassword: string;

  @IsString()
  @Length(8, 64)
  newPassword: string;
}

export class ResetPasswordRequestBodyDto {
  @IsString()
  @IsEmail()
  @Length(8, 64)
  email: string;
}

export class ResetPasswordBodyDto {
  @Type(() => Number)
  @IsNumber()
  id: number;

  @IsString()
  @Length(8, 64)
  password: string;

  @IsString()
  token: string;
}
