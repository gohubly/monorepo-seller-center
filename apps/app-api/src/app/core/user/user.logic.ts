import { iObject, objectToUserMapper } from "@gohubly/shared-types"
import { NextFunction } from "express";
import UserRepository from "./user.repository"

const createNewUser = async (values: iObject, next: NextFunction) => {
  try {
    console.log('logic: Init attempt to create new user')
  
    const newUser = objectToUserMapper(values)
    await UserRepository.create(newUser, next)
  } catch (error) {
    next(error)
  }
}

const UserLogic = {
  createNewUser,
}

export default UserLogic