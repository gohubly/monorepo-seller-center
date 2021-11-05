import { iUser } from '@gohubly/shared'
import { UserModel } from '../user/user.model'

const getUserByEmailAndPassword = async (email: string, cryptedPassword: string): Promise<iUser> => {
  console.log('Init check in database if login is correct', { email, cryptedPassword })

  const user = await UserModel.findOne({ email, password: cryptedPassword })
  return user
}

const LoginRepository = {
  getUserByEmailAndPassword,
}

export default LoginRepository;