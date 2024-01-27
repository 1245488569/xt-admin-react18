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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider dashed />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <div className="text-2xl text-red-400">111</div>

      <svg aria-hidden="true">
        <use xlinkHref="#icon-hamburger-closed" />
      </svg>

      <ICarbonApps />

      <div>
        <div>
          <SvgIcon name="hamburger-closed" className="h-50px w-50px text-red-400" />
          <SvgIcon name="ant-design:aliwangwang-filled" className="h-50px w-50px text-blue-400" />
        </div>
      </div>
    </>
  )
}

export default App
