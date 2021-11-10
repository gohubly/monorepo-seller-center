import { iObject, UserStatusEnum } from "@gohubly/shared";
import { NextFunction } from "express";
import { Crypto } from "@gohubly/shared";
import UserRepository from "../user/user.repository";

const authenticateUser = async (payload: iObject, next: NextFunction) => {
  console.log('logic: Init attempt to authenticate user')
  const { email, password } = payload;
  try {
    const encryptedPassword = Crypto.encrypt(password)
  
    const user = await UserRepository.getUserByEmailAndPassword(email, encryptedPassword)
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