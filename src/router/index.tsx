import { createBrowserRouter } from 'react-router-dom'
import type { CustomRouteObject } from 'types/router'
import Err404 from '@/views/404'

function ViteDemo() {
  return (
    <h2>
      欢迎学习vite课程
      <Link to="..">Back</Link>
    </h2>
  )
}

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <ViteDemo />,
  },
  {
    path: '*',
    element: <Err404 />,
  },
]

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes)

export default router
