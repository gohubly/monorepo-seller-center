import { Crypto, iUser } from "@gohubly/shared";
import { NextFunction } from "express";
import * as moment from "moment";
import { getConnection } from "typeorm";

import UsersEntity from '../../database/entities/Users'

const create = async (user: iUser, next: NextFunction): Promise<iUser> => {
  console.log('Init create new user in database', `user name: ${user.name}`)
  try {
    const UserRepository = getConnection().getRepository(UsersEntity);
    const cryptedPassword = Crypto.encrypt(user.password)

    const userWithSameEmail = await getUserByEmailAndCryptedPassword(user.email, cryptedPassword)
    if (userWithSameEmail) throw 'user already exists'

    const createdAtIso = moment().toISOString()

    const userWithCryptedPassword: UsersEntity = {
      ...user,
      password: cryptedPassword,
      createdAt: createdAtIso,
    }

    const createdUser = await UserRepository.create(userWithCryptedPassword)
    return createdUser
  } catch (error) {
    next(error)
  }
}

const getUserByEmailAndCryptedPassword = async (email: string, cryptedPassword: string): Promise<iUser> => {
  console.log('Init check in database if login is correct', { email, cryptedPassword })
  try {
    const UserRepository = getConnection().getRepository(UsersEntity);

    const user = await UserRepository.findOne({ email, password: cryptedPassword })
    return user
  } catch (error) {
    console.error('getUserByEmailAndCryptedPassword', error)
  }
}

const getUserByEmail = async (email: string): Promise<iUser> => {
  console.log('Init get user by email in database', { email })
  try {
    const UserRepository = getConnection().getRepository(UsersEntity);

    const user = await UserRepository.findOne({ email })
    return user
  } catch (error) {
    console.error('getUserByEmail', error)
  }
}

const UserRepository = {
  getUserByEmailAndCryptedPassword,
  getUserByEmail,
  create,
}

export default UserRepository