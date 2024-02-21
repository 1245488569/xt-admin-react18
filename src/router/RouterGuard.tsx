import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: React.ReactNode
}

const RouterGuard: React.FC<IProps> = (props) => {
  console.log('RouterGuard tsx')

  const route = useLocation()
  console.log(route)

  const { enableDynamicTitle } = useAppSelector(
    state => ({
      enableDynamicTitle: state.config.app.enableDynamicTitle,
    }),
    shallowEqualApp,
  )
  useEffect(() => {
    if (enableDynamicTitle)
      document.title = 'aaa'
    else
      document.title = import.meta.env.VITE_APP_TITLE
  }, [enableDynamicTitle])

  return props.children
}

export default RouterGuard
