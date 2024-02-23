import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { setMessage } from '@/store/modules/counter'

const FrameDashboard: React.FC = () => {
  console.log('FrameDashboard tsx')

  const { count, message } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqualApp,
  )

  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(setMessage('Hello xt'))
  }

  const nav = useNavigate()
  function goDemo1() {
    nav('/demo1', {
      state: {
        key: 'value',
      },
    })
  }

  return (
    <div>
      <h2>
        当前计数:
        {count}
      </h2>
      <h2>
        当前消息:
        {message}
      </h2>
      <Button onClick={handleChangeMessage}>修改message</Button>

      <div>
        <Button onClick={goDemo1}>前往demo1</Button>
      </div>
    </div>
  )
}

export default FrameDashboard
