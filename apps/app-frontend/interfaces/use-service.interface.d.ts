interface iUseService<iUniqueServiceData = iAny, iUniqueServiceBodyDto = iAny> {
  response?: iUseServiceResponse<iUniqueServiceData>
  error?: iUseServiceError
  makeRequest: (params: iUniqueServiceBodyDto) => void
  loading: boolean
}

type iUseServiceOmits = Omit<iUseService, 'makeRequest'>

interface iUseServiceError {
  error: string
  status: number | string
}

interface iUseServiceResponse<iUniqueServiceData> {
  data?: iUniqueServiceData
  status?: number
}