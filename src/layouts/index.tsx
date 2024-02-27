const Layout: React.FC = () => {
  console.log('Layout tsx')

  return (
    <div>
      <div className="bg-red-500">top</div>
      <Outlet />

      <div className="bg-red-500">bootom</div>
    </div>
  )
}

export default Layout
