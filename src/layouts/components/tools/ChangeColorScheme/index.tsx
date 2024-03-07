import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  className?: string
}

export default function ChangeColorScheme(props: IProps) {
  const { className } = props
  const { colorScheme, setColorScheme } = useSysConfigStore(useShallow(state => ({
    colorScheme: state.colorScheme,
    setColorScheme: state.setColorScheme,
  })))

  function toggleClick() {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`${className}`} onClick={toggleClick}>
      <SvgIcon name={colorScheme === 'light' ? 'ant-design:sun-filled' : 'ant-design:moon-filled'} size={20} className="cursor-pointer" />
    </div>
  )
}
