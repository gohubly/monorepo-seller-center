import { useService } from '../../../hooks'
import { useCallback } from 'react'
import { iLoginParams, iLoginResponse } from './LoginForm.interface'

const useLoginFormLogic = (params?: iLoginParams, refs?: React.RefObject<unknown>[]): iUseLoginFormLogic => {
  const onSuccessRequest = useCallback(() => {
    alert('daora')
  }, [])

  const { makeRequest, ...service } = useService<iLoginResponse, iLoginParams>({
    url: 'POST_LOGIN_USER',
    method: 'POST',
    onSuccess: onSuccessRequest,
  })

  const handleSubmitForm = useCallback((values) => {
    makeRequest({
      email: values.email,
      password: values.password,
    })
  }, [makeRequest])

  return {
    handleSubmitForm,
    service,
  }
}

export default useLoginFormLogic
