import { iUser } from "@gohubly/shared-types";
import { NextFunction } from "express";
import { UserModel } from "./user.model";

const create = async (user: iUser, next: NextFunction) => {
  try {
    const userWithSameEmail = await UserModel.findOne({ email: user.email })
    if (userWithSameEmail) throw 'user already exists'

    await UserModel.create(user)
  } catch (error) {
    next(error)
  }
}

const UserRepository = {
  create,
}

export default UserRepository