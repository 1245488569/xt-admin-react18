import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { changeDefaultLanguageAction, changeEnableDynamicTitleAction, changeEnableProgressAction } from '@/store/modules/config'

const Demo1: React.FC = () => {
  console.log('Demo1 tsx')
  const { count, enableProgress, enableDynamicTitle } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message,
      enableProgress: state.config.app.enableProgress,
      enableDynamicTitle: state.config.app.enableDynamicTitle,
    }),
    shallowEqualApp,
  )

  const dispatch = useAppDispatch()
  function handleChangeProgress() {
    dispatch(changeEnableProgressAction(!enableProgress))
  }

  function handleChangeDynamicTitle() {
    dispatch(changeEnableDynamicTitleAction(!enableDynamicTitle))
  }

  function handleChangeDefaultLanguage(value: Language) {
    dispatch(changeDefaultLanguageAction(value))
  }

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
        defaultValue="zh-cn"
        style={{ width: 200 }}
        onChange={handleChangeDefaultLanguage}
        options={[
          { value: 'zh-cn', label: '简体中文' },
          { value: 'zh-tw', label: '繁体中文' },
          { value: 'en', label: '英文' },
        ]}
      />

      <DatePicker />
    </div>
  )
}

export default Demo1
