import { useCallback, useEffect, useState } from 'react'

import axios, { AxiosRequestConfig } from 'axios'

// Primeiro parametro de interface: Resposta da API
// Segundo parametro de interface: Entrada do body da API

export function useService<iUniqueServiceData, iUniqueServiceParam>(
  {
    auto,
    method,
    url,
    headers,
    ...params
  }: iUseServiceParams & iUniqueServiceParam,
  refs?: React.RefObject<unknown>[]
): iUseService<iUniqueServiceData, iUniqueServiceParam> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [response, setResponse] = useState<iUseServiceResponse<iUniqueServiceData>>()

  const makeRequest = useCallback(async (params: iUniqueServiceParam) => {
    try {
      setLoading(true)
      let axiosRequestConfiguration: AxiosRequestConfig = {
        url,
        method: method || 'GET',
        headers,
      }

      if (params) {
        axiosRequestConfiguration = {
          ...axiosRequestConfiguration,
          data: params,
        }
      }
      const axiosRequest = await axios(axiosRequestConfiguration)
      const statusIsValid = axiosRequest.status >= 200 && axiosRequest.status <= 300
      
      console.log('request', axiosRequest)

      if (!statusIsValid) throw axiosRequest

      setResponse({
        data: axiosRequest.data,
        status: axiosRequest.status
      })
    } catch (error) {
      // setError()
      console.error('error while fetching', error)
    } finally {
      setLoading(false)
    }
  }, [headers, method, url])


  useEffect(() => {
    if (auto && !response && !loading) {
      makeRequest(params as iUniqueServiceParam)
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
