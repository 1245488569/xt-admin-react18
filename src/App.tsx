import { RouterProvider, createHashRouter } from 'react-router-dom'
import rootRoutes from './router'
import useAntdI18n from './hooks/useAntdI18n'

function App() {
  console.log('App tsx')

  const locale = useAntdI18n()

  return (
    <ConfigProvider locale={locale}>
      <RouterProvider router={createHashRouter(rootRoutes)} />
    </ConfigProvider>

  )
}

export default App
