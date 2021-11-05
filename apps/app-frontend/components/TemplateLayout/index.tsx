import { useRouter } from "next/dist/client/router";
import { useMemo } from "react";

import { useAuthContext } from "../../context";
import { ROUTES } from '@gohubly/shared'

const TemplateLayout: React.FC<iTemplateLayout> = ({ children, type }) => {
  const router = useRouter()
  const { isAuthenticated } = useAuthContext()
  
  const hasPermissionsToRender = useMemo(() => {
    if (type === 'PUBLIC') return true
    if (type === 'AUTHENTICATED' && !isAuthenticated) return false

    return false
  }, [type, isAuthenticated])
  
  if (hasPermissionsToRender) return children
  else {
    router.push(ROUTES.HOME)
    return null
  }
}

export default TemplateLayout