import { RouterProvider } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import zhTW from 'antd/locale/zh_TW'
import { shallow } from 'zustand/shallow'
import { useSysConfigStore } from './stores/config'
import router from './router'
import Loading from './views/Loading'

function App() {
  console.log('App tsx')

  const { i18n } = useTranslation()

  const [locale, setLocale] = useState(zhCN)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cancelSub = useSysConfigStore.subscribe(
      state => state.defaultLanguage,
      (language) => {
        console.log('App tsx language', language)
        setLocale(language === 'zhCn' ? zhCN : language === 'zhTw' ? zhTW : enUS)
        i18n.changeLanguage(language)
        setLoading(false)
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      },
    )

    return () => cancelSub()
  }, [i18n])

  if (loading)
    return 'loading...'

  return (
    <ConfigProvider locale={locale}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </ConfigProvider>

  )
}

export default App
