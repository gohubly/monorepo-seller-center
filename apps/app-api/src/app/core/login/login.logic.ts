import { NextFunction } from "express";
import { iObject, UserStatusEnum } from "@gohubly/shared";
import { Crypto, jwt } from "@gohubly/shared";
import UserRepository from "../user/user.repository";
import { HttpStatusCode } from "../../../config/enums";
import { CommonHandler } from "../../../api/dtos/controllers.dto";

const authenticateUser = async (payload: iObject, next: NextFunction): Promise<string> => {
  console.log('logic: Init attempt to authenticate user')
  const { email, password } = payload;
  try {
    const user = await UserRepository.getUserByEmail(email)
    if (!user) throw new CommonHandler({
      status: HttpStatusCode.UNAUTHORIZED,
      error: 'user not found',
    })

    const userIsDisabled = user.status === UserStatusEnum.DISABLED
    if (userIsDisabled) throw new CommonHandler({
      status: HttpStatusCode.UNAUTHORIZED,
      error: 'user not active',
    })

    const passwordMatch = await Crypto.compare(password, user.password)
    if (!passwordMatch) throw new CommonHandler({
      status: HttpStatusCode.UNAUTHORIZED,
      error: 'user not found',
    })

    const jwtToken = jwt.sign({
      user,
    })

    return jwtToken
  } catch (error) {
    next(error)
  }
}

const LoginLogic = {
  authenticateUser,
}

export default LoginLogic;