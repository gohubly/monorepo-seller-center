import { Crypto, iUser } from "@gohubly/shared";
import { NextFunction } from "express";

import UsersModel from '../../database/models/Users'

const create = async (user: iUser, next: NextFunction) => {
  console.log('Init create new user in database', `user name: ${user.name}`)
  try {
    const cryptedPassword = Crypto.encrypt(user.password)

    const userWithSameEmail = await getUserByEmailAndPassword(user.email, cryptedPassword)
    if (userWithSameEmail) throw 'user already exists'

    const userWithCryptedPassword: iUser = {
      ...user,
      password: cryptedPassword
    }

    await UsersModel.create(userWithCryptedPassword)
  } catch (error) {
    next(error)
  }
}

const getUserByEmailAndPassword = async (email: string, cryptedPassword: string): Promise<any> => {
  console.log('Init check in database if login is correct', { email, cryptedPassword })

  const user = await UsersModel.findOne({ email, password: cryptedPassword })
  return user
}

const UserRepository = {
  getUserByEmailAndPassword,
  create,
}

export default UserRepository