import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  className?: string
}

export default function SidebarCollapse(props: IProps) {
  const { className } = props
  const { subMenuCollapse, setSubMenuCollapse } = useSysConfigStore(useShallow(state => ({
    subMenuCollapse: state.nav.subMenuCollapse,
    setSubMenuCollapse: state.setSubMenuCollapse,
  })))

  function toggleClick() {
    setSubMenuCollapse(!subMenuCollapse)
  }

  return (
    <div onClick={toggleClick} className={`${className}`}>
      <SvgIcon name={subMenuCollapse ? 'hamburger-opened' : 'hamburger-closed'} size={20} className="cursor-pointer" />
    </div>
  )
}
