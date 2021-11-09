import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useState } from 'react'

const useRouteTransitionBarLogic = ({ children }: iUseRouteTransitionBarLogicParams, refs?: React.RefObject<unknown>[]): iUseRouteTransitionBarLogic => {
  const Router = useRouter()
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const routeChangeStart = () => setTransition(true)
    const routeChangeComplete = () => setTransition(false)

    Router.events.on("routeChangeStart", routeChangeStart)
    Router.events.on("routeChangeComplete", routeChangeComplete)

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart)
      Router.events.off("routeChangeComplete", routeChangeComplete)
    }
  }, [Router])

  return {
    transition,
  }
}

export default useRouteTransitionBarLogic
