import { useShallow } from 'zustand/react/shallow'
import type { MenuProps } from 'antd'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  className?: string
}

export default function LangSelect(props: IProps) {
  const { className } = props
  const { defaultLanguage, setDefaultLanguage } = useSysConfigStore(useShallow(state => ({
    defaultLanguage: state.defaultLanguage,
    setDefaultLanguage: state.setDefaultLanguage,
  })))

  const items: MenuProps['items'] = [
    {
      key: 'zhCn',
      label: '简体中文',
      disabled: defaultLanguage === 'zhCn',
      onClick: () => {
        setDefaultLanguage('zhCn')
      },
    },
    {
      key: 'zhTw',
      label: '繁體中文',
      disabled: defaultLanguage === 'zhTw',
      onClick: () => {
        setDefaultLanguage('zhTw')
      },
    },
    {
      key: 'en',
      label: 'English',
      disabled: defaultLanguage === 'en',
      onClick: () => {
        setDefaultLanguage('en')
      },
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottom" className={`${className}`}>
      <div><SvgIcon name="ri:translate" size={20} className="cursor-pointer" /></div>
    </Dropdown>
  )
}
