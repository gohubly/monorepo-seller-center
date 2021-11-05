import { Crypto, iUser } from "@gohubly/shared-types";
import { NextFunction } from "express";
import { UserModel } from "./user.model";

const create = async (user: iUser, next: NextFunction) => {
  console.log('Init create new user in database', `user name: ${user.name}`)
  try {
    const cryptedPassword = Crypto.encrypt(user.password)

    const userWithSameEmail = await UserModel.findOne({ email: user.email })
    if (userWithSameEmail) throw 'user already exists'

    const userWithCryptedPassword: iUser = {
      ...user,
      password: cryptedPassword
    }

    await UserModel.create(userWithCryptedPassword)
  } catch (error) {
    next(error)
  }
}

const getUserByEmailAndPassword = async (email: string, cryptedPassword: string): Promise<iUser> => {
  console.log('Init check in database if login is correct', { email, cryptedPassword })

  const user = await UserModel.findOne({ email, password: cryptedPassword })
  return user
}

const UserRepository = {
  getUserByEmailAndPassword,
  create,
}

export default UserRepository