import { useCallback, useEffect, useState } from 'react'

import axios, { AxiosRequestConfig } from 'axios'

// Primeiro parametro de interface: Resposta da API
// Segundo parametro de interface: Entrada do body da API

function useService<iUniqueServiceData, iUniqueServiceParam>(
  {
    fetchOnLoad,
    method,
    url,
    headers,
    ...params
  }: iUseServiceParams & iUniqueServiceParam,

  refs?: React.RefObject<unknown>[]
): iUseService<iUniqueServiceData> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [response, setResponse] = useState<iUseServiceResponse<iUniqueServiceData>>({

  })

  const makeRequest = useCallback(async () => {
    try {
      let body: AxiosRequestConfig = {
        url,
        method: method || 'GET',
        headers,
      }

      if (params) {
        body = {
          ...body,
          data: params,
        }
      }
      const axiosRequest = await axios(body)
      const statusIsValid = axiosRequest.status >= 200 && axiosRequest.status <= 300

    } catch (error) {
      console.error('error while fetching')
    }
  }, [headers, method, params, url])

  useEffect(() => {
    if (fetchOnLoad && !response) {
      makeRequest()
    }
    // return () => {
    // }
  }, [response, fetchOnLoad, makeRequest])

  return {
    error,
    response,
    loading,
  }
}

export default useService
