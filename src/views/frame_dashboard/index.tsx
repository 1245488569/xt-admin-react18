export function Component() {
  console.log('FrameDashboard tsx')
  const nav = useNavigate()
  function goDemo1() {
    nav('/demo1', {
      state: {
        key: 'value',
      },
    })
  }

  return (
    <div>
      <div>
        <Button onClick={goDemo1}>前往demo1</Button>
      </div>
    </div>
  )
}
