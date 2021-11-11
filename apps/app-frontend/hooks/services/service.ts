import axios from 'axios'
import { ROUTES } from '@gohubly/shared'

const API = axios.create({
  baseURL: 'http://localhost:4433/api',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})

API.interceptors.request.use(
  async config => {
    // if (config.headers['x-authorization-token'] !== '' && hasTokenInLocalStorage) {
    //   config.headers['x-authorization-token'] = token
    // }

    try {
      if (config.data) {
        Object.keys(config.data).forEach(key => {
          if (typeof config.data[key] === 'string') config.data[key] = config.data[key].trim()
        })
        Object.keys(config.data).forEach(itemKey => {
          if (!config.data[itemKey]) delete config.data[itemKey]
        })
      }
    } catch {
      console.error('axios api interceptor request failed')
    }
    return config
  },
  response => Promise.reject(response)
)

API.interceptors.response.use(
  async response => {
    return { ...response }
  },
  async error => {
    try {
      if (
        error.response.status === 401 &&
        !error.response.config.url.includes('/login') &&
        !error.response.config.url.includes('/reset-password')
      ) {
        localStorage.clearAll()

        window.open(ROUTES.LOGIN, '_self')
      }

    } catch {
      console.error('axios api interceptor response failed')
    }

    return { ...error }
    // return { ...error, cmsMessage, dataError, isValid }
  }
)

export default API
