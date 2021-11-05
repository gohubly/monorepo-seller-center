import { iObject } from '@gohubly/shared'

interface iCommonHandler {
  status: number
  message?: string
  error?: string
  data?: iObject | string
}

export class CommonHandler {
  status = 0
  message? = ''
  error? = ''
  data? = {} || ''

  constructor(response: iCommonHandler) {
    this.status = response.status
    this.message = response.message
    this.error = response.error
    this.data = response.data
  }
}