import axios from 'axios'
import { Suspense } from 'react'
import Loading from './views/Loading'
import RouterGuard from './router/RouterGuard'
import rootRouters from './router'

function App() {
  axios.post('/api/login')

  return (

    <RouterGuard>
      <Suspense fallback={<Loading />}>
        {useRoutes(rootRouters)}
      </Suspense>
    </RouterGuard>

  )
}

export default App
