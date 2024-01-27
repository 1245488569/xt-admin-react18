import { createBrowserRouter } from 'react-router-dom'
import type { CustomRouteObject } from '../../types/router'

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
]

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes)

export default router
