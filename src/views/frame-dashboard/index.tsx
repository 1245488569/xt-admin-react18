import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

export function Component() {
  console.log('FrameDashboard tsx')

  const nav = useNavigate()
  const { defaultLanguage } = useSysConfigStore(useShallow(state => ({
    defaultLanguage: state.defaultLanguage,
  })))

  function goDemo1() {
    nav('/demo1', {
      state: {
        key: 'value',
      },
    })
  }

  const goTo = (id: number) => {
    nav(`/list/user/detail`, {
      state: {
        id,
      },
    })
  }

  return (
    <div>
      <div>
        { defaultLanguage.toString() }
        <Button onClick={goDemo1}>前往demo1</Button>
        <Button onClick={() => goTo(1)}>详情1</Button>
      </div>

      { Array.from({ length: 100 }).map((_, index) => {
        return <div key={index}>111</div>
      }) }
    </div>
  )
}
