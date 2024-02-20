import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: React.ReactNode
}

const RouterGuard: React.FC<IProps> = (props) => {
  console.log('RouterGuard tsx')

  const route = useLocation()
  console.log(route)

  const { globalConfig } = useAppSelector(
    state => ({
      globalConfig: state.config,
    }),
    shallowEqualApp,
  )

  useEffect(() => {
    globalConfig.app.enableProgress && console.log('start')
  }, [globalConfig.app.enableProgress])

  return props.children
}

export default RouterGuard
