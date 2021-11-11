import { iObject, iUser, objectToUserMapper } from "@gohubly/shared"
import { NextFunction } from "express";
import UserRepository from "./user.repository"

const createNewUser = async (values: iObject, next: NextFunction): Promise<iUser> => {
  try {
    console.log('logic: Init attempt to create new user')
  
    const newUser = objectToUserMapper(values)
    const user = await UserRepository.create(newUser, next)
    return user
  } catch (error) {
    next(error)
  }
}

const UserLogic = {
  createNewUser,
}

export default UserLogic