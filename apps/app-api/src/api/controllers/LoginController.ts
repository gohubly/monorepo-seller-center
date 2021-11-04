import { NextFunction, Request, Response } from "express"
import LoginLogic from "../../app/core/login/login.logic"
import { HttpStatusCode } from "../../config/enums"
import { CommonHandler } from "../dtos/controllers.dto"

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('controller: Init attempt to login')
    await LoginLogic.authenticateUser(req.body, next)

    res.status(HttpStatusCode.OK_NO_CONTENT)
  } catch (dataError) {
    const response = new CommonHandler({
      status: dataError.status ?? HttpStatusCode.INTERNAL_SERVER_ERROR,
      error: dataError,
    })
    
    next(response)
  }
}

const LoginController = {
  login,
}

export default LoginController