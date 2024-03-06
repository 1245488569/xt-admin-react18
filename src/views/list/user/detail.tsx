export function Component() {
  const loaction = useLocation()

  console.log(loaction)

  return (
    <div>
      UserDetail:
      {loaction.state?.id}
    </div>
  )
}
