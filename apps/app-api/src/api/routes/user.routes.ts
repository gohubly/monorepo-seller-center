import * as express from 'express'

import UserController from '../controllers/UserController'
import { validateSchema } from '../middleware/schemaValidator.midd'
import { createUserSchema } from '../schema/user.schema'

const userRouter = express.Router()

userRouter
  .route('/user/create-account')
  .post(validateSchema(createUserSchema), UserController.create)

export default userRouter