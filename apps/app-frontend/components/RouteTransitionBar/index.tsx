import { theme } from '@gohubly/design-system';
import { useEffect } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import useRouteTransitionBarLogic from './hook'

const RouteTransitionBar: React.FC = () => {
  const { transition } = useRouteTransitionBarLogic();
  
  useEffect(() => {
    TopBarProgress.config({
      shadowBlur: 5,
      barColors: {
        "0": theme.colors.primary200,
        "0.2": theme.colors.primary300,
        "0.4": theme.colors.primary400,
        "0.6": theme.colors.primary500,
        "0.8": theme.colors.primary600,
        "1": theme.colors.primary700,
      }
    });
  }, [])

  if (!transition) return null
  return <TopBarProgress />
}

export default RouteTransitionBar