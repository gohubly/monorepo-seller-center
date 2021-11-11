import { NextFunction, Request, Response } from "express"
import LoginLogic from "../../app/core/login/login.logic"
import { HttpStatusCode } from "../../config/enums"
import { CommonHandler } from "../dtos/controllers.dto"

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('controller: Init attempt to login')
    await LoginLogic.authenticateUser(req.body, next)

    const response = new CommonHandler({
      status: HttpStatusCode.OK,
    })

    res.status(HttpStatusCode.OK).json(response)
  } catch (dataError) {
    const response = new CommonHandler({
      status: dataError?.status ?? HttpStatusCode.UNAUTHORIZED,
      error: dataError,
    })
    
    next(response)
  }
}

const LoginController = {
  login,
}

export default LoginController