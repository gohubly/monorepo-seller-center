import { NextFunction, Request, Response } from "express"
import LoginLogic from "../../app/core/login/login.logic"
import { HttpStatusCode } from "../../config/enums"
import { CommonHandler } from "../dtos/controllers.dto"

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('controller: Init attempt to login')
    const jwt = await LoginLogic.authenticateUser(req.body, next)

    const response = new CommonHandler({
      status: 200,
      data: {
        jwt,
      }
    })
    
    const error = new CommonHandler({
      status: HttpStatusCode.UNAUTHORIZED,
      error: 'user not found',
    })

    res.status(error.status).json(error)
  } catch (dataError) {
    const response = new CommonHandler({
      status: dataError?.status ?? HttpStatusCode.UNAUTHORIZED,
      error: dataError,
    })
    
    res.status(response.status).json(response)
  }
}

const LoginController = {
  login,
}

export default LoginController