import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react'

const useRouteTransitionBarLogic = (): iUseRouteTransitionBarLogic => {
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
