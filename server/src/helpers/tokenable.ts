import DataStoredInToken from "../iterfaces/data-stored-in-token";
import jwt from "jsonwebtoken";
import { TokenData } from "../iterfaces/token-data.interface";

export const ONE_DAY = 60 * 60 * 24;
export const TEN_YEARS = ONE_DAY * 3650;

export class Tokenable {
  public createToken(userId: number, expiresIn: number): TokenData {
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      id: userId,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }
}
