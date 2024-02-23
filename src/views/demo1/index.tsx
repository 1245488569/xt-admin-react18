import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { setDefaultLanguage, setEnableDynamicTitle, setEnableProgress } from '@/store/modules/config'

const Demo1: React.FC = () => {
  console.log('Demo1 tsx')

  const { t, i18n } = useTranslation()

  const { count, enableProgress, enableDynamicTitle, defaultLanguage } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message,
      enableProgress: state.config.app.enableProgress,
      enableDynamicTitle: state.config.app.enableDynamicTitle,
      defaultLanguage: state.config.defaultLanguage,
    }),
    shallowEqualApp,
  )

  const dispatch = useAppDispatch()
  function handleChangeProgress() {
    dispatch(setEnableProgress(!enableProgress))
  }

  function handleChangeDynamicTitle() {
    dispatch(setEnableDynamicTitle(!enableDynamicTitle))
  }

  function handleChangeDefaultLanguage(value: Language) {
    dispatch(setDefaultLanguage(value))
    i18n.changeLanguage(value)
  }

  const location = useLocation()
  console.log(location)

  return (
    <div>
      <h2>
        当前计数:
        {count}
      </h2>
      <h2>
        进度条状态:
        {enableProgress.toString()}
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

export default Demo1
