export function Component() {
  const loaction = useLocation()

  return (
    <div>
      UserDetail:
      {loaction.state?.id}
    </div>
  )
}
