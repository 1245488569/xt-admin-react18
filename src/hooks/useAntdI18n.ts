import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import zhTW from 'antd/locale/zh_TW'
import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

export default function useAntdI18n() {
  console.log('useAntdI18n.ts')

  const { defaultLanguage } = useSysConfigStore(useShallow(state => ({
    defaultLanguage: state.defaultLanguage,
  })))

  const locale = defaultLanguage === 'zhCn' ? zhCN : defaultLanguage === 'zhTw' ? zhTW : enUS

  return locale
}
