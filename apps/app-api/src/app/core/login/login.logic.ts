import { iObject, UserStatusEnum } from "@gohubly/shared-types";
import { NextFunction } from "express";
import { Crypto } from "@gohubly/shared-types";
import LoginRepository from "./login.repository";

const authenticateUser = async (payload: iObject, next: NextFunction) => {
  console.log('logic: Init attempt to authenticate user')
  const { email, password } = payload;
  try {
    const encryptedPassword = Crypto.encrypt(password)
  
    const user = await LoginRepository.getUserByEmailAndPassword(email, encryptedPassword)
    if (!user) throw 'user not found'

    const userIsDisabled = user.status === UserStatusEnum.DISABLED
    if (userIsDisabled) throw 'user not active'
  } catch (error) {
    next(error)
  }
}

const LoginLogic = {
  authenticateUser,
}

export default LoginLogic;