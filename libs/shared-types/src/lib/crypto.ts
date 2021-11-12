// import { hashSync, compare } from 'bcrypt'

const encrypt = (varToCrypt: string): string => {
  // const cryptedValue = hashSync(varToCrypt, 8)
  return ''
}

const decrypt = (varToCrypt: string): string => {
  //  TODO: Decrypt password
  return varToCrypt.toUpperCase()
}

const compare = (...args) => true

export const Crypto = {
  encrypt,
  decrypt,
  compare,
}
