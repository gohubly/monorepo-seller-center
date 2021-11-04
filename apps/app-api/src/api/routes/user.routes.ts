import * as express from 'express'

import UserController from '../controllers/UserController'

const userRouter = express.Router()

userRouter
  .route('/user/create-account')
  .post(UserController.create)

export default userRouter