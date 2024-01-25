import axios from 'axios'

function App() {
  axios.post('/api/login')

  return (
    <>
      <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
      <div className="text-2xl text-red-400">111</div>
    </>
  )
}

export default App
