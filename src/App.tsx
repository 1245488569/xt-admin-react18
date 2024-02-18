import axios from 'axios'
import { RouterProvider } from 'react-router-dom'
import Router from './router'

function App() {
  axios.post('/api/login')

  return (
    <>

      <RouterProvider router={Router} />
    </>
  )
}

export default App
