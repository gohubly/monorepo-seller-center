import { Router } from 'express'

import userRouter from './user.routes'
import loginRouter from './login.routes'

const routes = Router()
routes.use(userRouter)
routes.use(loginRouter)

export default routes