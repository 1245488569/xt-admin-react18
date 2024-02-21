import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import zhTW from 'antd/locale/zh_TW'
import { shallowEqualApp, useAppSelector } from '@/store'

export default function useAntdI18n() {
  console.log('useAntdI18n.ts')

  const { defaultLanguage } = useAppSelector(
    state => ({
      defaultLanguage: state.config.defaultLanguage,
    }),
    shallowEqualApp,
  )

  const locale = defaultLanguage === 'zh-cn' ? zhCN : defaultLanguage === 'zh-tw' ? zhTW : enUS
  return locale
}
