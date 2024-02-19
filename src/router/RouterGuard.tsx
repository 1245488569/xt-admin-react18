import NProgress from 'nprogress'
import { shallowEqualApp, useAppSelector } from '@/store'

// 引入nprogress插件
import 'nprogress/nprogress.css'

// 这个nprogress样式必须引入

interface IProps {
  children?: React.ReactNode
}

const RouterGuard: React.FC<IProps> = (props) => {
  const route = useLocation()
  console.log(route)

  const { globalConfig } = useAppSelector(
    state => ({
      globalConfig: state.config,
    }),
    shallowEqualApp,
  )

  globalConfig.app.enableProgress && NProgress.start()

  globalConfig.app.enableProgress && NProgress.done()

  return props.children
}

export default RouterGuard
