import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

export function Component() {
  console.log('Demo1 tsx')

  const { t, i18n } = useTranslation()

  const { enableProgress, enableDynamicTitle, defaultLanguage, setEnableProgress, setEnableDynamicTitle, setDefaultLanguage } = useSysConfigStore(useShallow(state => ({
    enableProgress: state.app.enableProgress,
    enableDynamicTitle: state.app.enableDynamicTitle,
    defaultLanguage: state.defaultLanguage,
    setEnableProgress: state.setEnableProgress,
    setEnableDynamicTitle: state.setEnableDynamicTitle,
    setDefaultLanguage: state.setDefaultLanguage,
  })))

  function handleChangeProgress() {
    setEnableProgress(!enableProgress)
  }

  function handleChangeDynamicTitle() {
    setEnableDynamicTitle(!enableDynamicTitle)
  }

  function handleChangeDefaultLanguage(value: Language) {
    setDefaultLanguage(value)
    i18n.changeLanguage(value)
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

      <Button onClick={handleChangeProgress}>开/关载入进度条</Button>
      <Button onClick={handleChangeDynamicTitle}>开/关动态标题</Button>
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
      <div>
        {t('notfound.title')}
      </div>
    </div>
  )
}
