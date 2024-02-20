import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { changeEnableProgressAction } from '@/store/modules/config'

const Demo1: React.FC = () => {
  console.log('Demo1 tsx')
  const { count, enableProgress } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message,
      enableProgress: state.config.app.enableProgress,
    }),
    shallowEqualApp,
  )

  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeEnableProgressAction(!enableProgress))
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

      <Button onClick={handleChangeMessage}>开启或关闭进度条</Button>
    </div>
  )
}

export default Demo1
