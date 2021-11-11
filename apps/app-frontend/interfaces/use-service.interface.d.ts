interface iUseServiceParams {
  auto?: boolean
  url?: string,
  method?: 'POST' | 'PATCH' | 'GET' | 'DELETE'
  headers?: AxiosRequestConfig.headers
}

interface iUseService<iUniqueServiceData, iUniqueServiceParam> {
  response?: iUseServiceResponse<iUniqueServiceData>
  error?: string
  makeRequest: (params: iUniqueServiceParam) => void
  loading: boolean
}

interface iUseServiceResponse<iUniqueServiceData> {
  data?: iUniqueServiceData
  status?: number
}