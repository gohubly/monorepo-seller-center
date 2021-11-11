import * as jsonwebtoken from 'jsonwebtoken'
import { iAny } from "../dtos"

const sign = async (payload: string | Record<string, iAny> | Buffer) => {
  return await jsonwebtoken.sign(payload, 'secret', {
    expiresIn: '1d'
  })
}

const decode = async (token: string) => {
  return await jsonwebtoken.decode(token)
}

export const jwt = {
  sign,
  decode
}