import { useShallow } from 'zustand/react/shallow'
import type { MenuProps } from 'antd'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  className?: string
}

export default function ChangeSize(props: IProps) {
  const { className } = props
  const { elementSize, setElementSize } = useSysConfigStore(useShallow(state => ({
    elementSize: state.elementSize,
    setElementSize: state.setElementSize,
  })))

  const items: MenuProps['items'] = [
    {
      key: 'middle',
      label: '默认',
      disabled: elementSize === 'middle',
      onClick: () => {
        setElementSize('middle')
      },
    },
    {
      key: 'large',
      label: '大型',
      disabled: elementSize === 'large',
      onClick: () => {
        setElementSize('large')
      },
    },
    {
      key: 'small',
      label: '小型',
      disabled: elementSize === 'small',
      onClick: () => {
        setElementSize('small')
      },
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottom" className={`${className}`}>
      <div><SvgIcon name="ri:apps-fill" size={20} className="cursor-pointer" /></div>
    </Dropdown>
  )
}
