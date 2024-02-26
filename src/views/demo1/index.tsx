import { useSysConfigStore } from '@/stores/config'

export function Component() {
  console.log('Demo1 tsx')

  const { t, i18n } = useTranslation()

  const { setEnableProgress, setEnableDynamicTitle, setDefaultLanguage, app, defaultLanguage } = useSysConfigStore()

  function handleChangeProgress() {
    setEnableProgress(!app.enableProgress)
  }

  function handleChangeDynamicTitle() {
    setEnableDynamicTitle(!app.enableDynamicTitle)
  }

  function handleChangeDefaultLanguage(value: Language) {
    setDefaultLanguage(value)
    i18n.changeLanguage(value)
  }

  return (
    <div>
      <h2>
        进度条状态:
        {app.enableProgress.toString()}
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
