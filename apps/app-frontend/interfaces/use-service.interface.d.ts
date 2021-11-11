interface iUseServiceParams {
  fetchOnLoad?: boolean
  url?: string,
  method?: 'POST' | 'PATCH' | 'GET' | 'DELETE'
  headers?: AxiosRequestConfig.headers
}

interface iUseService<iUniqueServiceData> {
  response?: iUseServiceResponse<iUniqueServiceData>
  error?: string
  loading: boolean
}

interface iUseServiceResponse<iUniqueServiceData> {
  data?: iUniqueServiceData
  status?: number
}