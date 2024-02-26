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

  return (
    <div>
      <div>
        { defaultLanguage.toString() }
        <Button onClick={goDemo1}>前往demo1</Button>
      </div>
    </div>
  )
}
