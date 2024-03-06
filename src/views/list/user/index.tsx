export function Component() {
  const nav = useNavigate()

  const goTo = (id: number) => {
    nav('/list/user/detail', {
      state: {
        id,
      },
    })
  }
  return (
    <div>
      UserList
      <Button onClick={() => goTo(1)}>详情1</Button>
    </div>
  )
}
