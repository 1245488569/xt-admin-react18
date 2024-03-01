export function Component() {
  console.log('Layout tsx')

  return (
    <div className="h-full bg-red">
      <div className="bg-red-500">top</div>
      <Outlet />

      <div className="bg-red-500">bootom</div>
    </div>
  )
}
