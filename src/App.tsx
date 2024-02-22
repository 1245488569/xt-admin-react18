import { Suspense } from 'react'
import Loading from './views/Loading'
import RouterGuard from './router/RouterGuard'
import rootRouters from './router'
import useAntdI18n from './hooks/useAntdI18n'

function App() {
  const locale = useAntdI18n()
  return (
    <ConfigProvider locale={locale}>
      <RouterGuard>
        <Suspense fallback={<Loading />}>
          {useRoutes(rootRouters)}
        </Suspense>
      </RouterGuard>
    </ConfigProvider>

  )
}

export default App
