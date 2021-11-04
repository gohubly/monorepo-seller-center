import { Crypto, iObject, iUser } from "@gohubly/shared-types"
import { NextFunction } from "express";
import UserRepository from "./user.repository"

const createNewUser = async (values: iObject, next: NextFunction) => {
  try {
    console.log('logic: Init attempt to create new user')
    const cryptedPassword = Crypto.encrypt(values?.password)
  
    const newUser: iUser = {
      address: values.address,
      birthdate: values.birthdate,
      document: values.document,
      email: values.email,
      gender: values.gender,
      name: values.name,
      password: cryptedPassword,
      phone: values.phone,
      status: values.status,
    }
  
    await UserRepository.create(newUser, next)
  } catch (error) {
    next(error)
  }
}

const UserLogic = {
  createNewUser,
}

export default UserLogic