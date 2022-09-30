import DataStoredInToken from "../iterfaces/data-stored-in-token";
import jwt from "jsonwebtoken";
import { TokenData } from "../iterfaces/token-data.interface";

export class Tokenable {
  public createToken(userId: number): TokenData {
    const expiresIn = 60 * 600000000000;
    const secret = process.env.JWTSECRET;
    const dataStoredInToken: DataStoredInToken = {
      id: userId,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }
}
