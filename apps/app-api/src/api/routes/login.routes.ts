import * as express from 'express'

import LoginController from '../controllers/LoginController'
import { validateSchema } from '../middleware/schemaValidator.midd'
import { loginUserSchema } from '../schema/login.schema'

const loginRouter = express.Router()

loginRouter
  .route('/login')
  .post(validateSchema(loginUserSchema), LoginController.login)

export default loginRouter