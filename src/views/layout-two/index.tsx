export function Component() {
  return (
    <div>
      <div className="h-50px bg-blue-500"></div>
      <Outlet />
      <div className="h-50px bg-green-500"></div>
    </div>
  )
}
