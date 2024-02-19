interface IProps {
  children?: React.ReactNode
}

const Layout: React.FC<IProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout
