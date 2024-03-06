export function Component() {
  const nav = useNavigate()

  const goTo = (id: number) => {
    nav(`/list/user/detail?id=${id}`)
  }
  return (
    <div>
      UserList
      <Button onClick={() => goTo(1)}>详情1</Button>
      <Button onClick={() => goTo(2)}>详情2</Button>
    </div>
  )
}
