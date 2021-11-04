import { NextFunction, Request, Response } from "express"
import UserLogic from "../../app/core/user/user.logic"
import { HttpStatusCode } from "../../config/enums"
import { CommonHandler } from "../dtos/controllers.dto"

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('controller: Init attempt to create user')
    await UserLogic.createNewUser(req.body, next)

    res.status(HttpStatusCode.OK_NO_CONTENT)
  } catch (error) {
    const response = new CommonHandler({
      status: error.status ?? HttpStatusCode.INTERNAL_SERVER_ERROR,
      error: error || 'Internal Server Error',
    })
    
    next(response)
  }
}

const UserController = {
  create,
}

export default UserController