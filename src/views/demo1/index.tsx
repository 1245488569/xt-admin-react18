import { useShallow } from 'zustand/react/shallow'
import { shallow } from 'zustand/shallow'
import { useSysConfigStore } from '@/stores/config'
import { tableListApi } from '@/api/test'

export function Component() {
  useEffect(() => {
    tableListApi({
      current: 1,
      pageSize: 10,
    })
  }, [])

  console.log('Demo1 tsx')

  const { t } = useTranslation()

  const { enableProgress, enableDynamicTitle, defaultLanguage, colorScheme, setEnableProgress, setEnableDynamicTitle, setDefaultLanguage, setColorScheme } = useSysConfigStore(useShallow(state => ({
    enableProgress: state.app.enableProgress,
    enableDynamicTitle: state.app.enableDynamicTitle,
    defaultLanguage: state.defaultLanguage,
    colorScheme: state.colorScheme,
    setEnableProgress: state.setEnableProgress,
    setEnableDynamicTitle: state.setEnableDynamicTitle,
    setDefaultLanguage: state.setDefaultLanguage,
    setColorScheme: state.setColorScheme,
  })))

  function handleChangeProgress() {
    setEnableProgress(!enableProgress)
  }

  function handleChangeDynamicTitle() {
    setEnableDynamicTitle(!enableDynamicTitle)
  }

  function handleChangeDefaultLanguage(value: Language) {
    setDefaultLanguage(value)
  }

  function handleChangeColorScheme() {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <h2>
        进度条状态:
        {enableProgress.toString()}
      </h2>
      <h2>
        动态标题状态:
        {enableDynamicTitle.toString()}
      </h2>
      <h2>
        默认语言:
        {defaultLanguage}
      </h2>
      <h2>
        暗黑模式:
        {colorScheme}
      </h2>

      <Button onClick={handleChangeProgress}>开/关载入进度条</Button>
      <Button onClick={handleChangeDynamicTitle}>开/关动态标题</Button>
      <Button onClick={handleChangeColorScheme}>切换暗黑</Button>

      <Select
        defaultValue={defaultLanguage}
        style={{ width: 200 }}
        onChange={handleChangeDefaultLanguage}
        options={[
          { value: 'zhCn', label: '简体中文' },
          { value: 'zhTw', label: '繁体中文' },
          { value: 'en', label: '英文' },
        ]}
      />

      <DatePicker />
      <div className="dark:text-red">
        {t('notfound.title')}
      </div>
    </div>
  )
}
