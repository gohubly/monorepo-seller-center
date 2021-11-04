import { useAuthContext } from '../../context'
import { useEffect } from 'react'

const useTemplateLoginLogic = <iLogicParams>(params?: iLogicParams, refs?: React.RefObject<unknown>[]): iUseTemplateLoginLogic => {
  const { clearAuthentication } = useAuthContext()
    
  useEffect(() => {
    clearAuthentication()
  }, [clearAuthentication, refs])

  return {}
}

export default useTemplateLoginLogic
