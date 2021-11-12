import { useCallback, useEffect, useState } from 'react'
import { AxiosRequestConfig } from 'axios'
import { ApiRoutes, ApiRoutesTypes, iObject } from '@gohubly/shared'

import axiosService from './service'

interface iUseServiceParams {
  auto?: boolean
  url?: ApiRoutesTypes
  method?: 'POST' | 'PATCH' | 'GET' | 'DELETE'
  headers?: AxiosRequestConfig['headers']
  mapper?: (entry: iObject) => iObject
  onSuccess?: () => void
}

// Primeiro parametro de interface: Resposta da API
// Segundo parametro de interface: Entrada do body da API

export function useService<iUniqueServiceData, iUniqueServiceBodyDto>(
  {
    url,
    method,
    auto,
    headers,
    onSuccess,
    mapper,
  }: iUseServiceParams,
  body?: iUniqueServiceBodyDto
): iUseService<iUniqueServiceData, iUniqueServiceBodyDto> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<iUseServiceError>()
  const [response, setResponse] = useState<iUseServiceResponse<iUniqueServiceData>>({})
  
  const makeRequest = useCallback(async (params: iUniqueServiceBodyDto) => {
    try {
      setLoading(true)
      let axiosRequestConfiguration: AxiosRequestConfig = {
        url: ApiRoutes[url],
        method: method || 'GET',
        headers,
      }

      if (params) {
        axiosRequestConfiguration = {
          ...axiosRequestConfiguration,
          data: mapper ? mapper(params) : params,
        }
      }

      const axiosRequest = await axiosService(axiosRequestConfiguration)
      const statusIsValid = axiosRequest.status >= 200 && axiosRequest.status <= 300

      if (!statusIsValid) throw axiosRequest

      onSuccess && onSuccess()

      setResponse({
        data: axiosRequest.data?.data || axiosRequest.data,
        status: axiosRequest.status
      })
    } catch (errorData) {
      setError({
        error: errorData?.response?.data?.error || errorData?.statusText,
        status: errorData?.response?.status || errorData?.status,
      })
    } finally {
      setLoading(false)
    }
  }, [headers, method, url, mapper, onSuccess])


  useEffect(() => {
    if (auto && !response && !loading) {
      makeRequest(body)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, makeRequest]) 

  return {
    error,
    response,
    loading,
    makeRequest
  }
}

export default useService
