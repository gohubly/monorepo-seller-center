// import { hashSync, compare } from 'bcrypt'

const encrypt = (varToCrypt: string): string => {
  // const cryptedValue = hashSync(varToCrypt, 8)
  return ''
}

const decrypt = (varToCrypt: string): string => {
  //  TODO: Decrypt password
  return varToCrypt.toUpperCase()
}

export const Crypto = {
  encrypt,
  decrypt,
  // compare,
}
