export function Component() {
  const nav = useNavigate()

  const goTo = (id: number) => {
    nav(`/list/goods/detail`, {
      state: { id },
    })
  }
  return (
    <div>
      GoodsList
      <Button onClick={() => goTo(1)}>详情1</Button>
      <Button onClick={() => goTo(2)}>详情2</Button>
    </div>
  )
}
