import axios from 'axios'

function App() {
  axios.post('/api/login')

  return (
    <>
      <div className="text-2xl text-red-400">111</div>
    </>
  )
}

export default App
