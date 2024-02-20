import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { Fragment } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'

const Loading: React.FC = () => {
  console.log('Loading tsx')

  const { enableProgress } = useAppSelector(
    state => ({
      enableProgress: state.config.app.enableProgress,
    }),
    shallowEqualApp,
  )

  useEffect(() => {
    enableProgress && nprogress.start()
    return () => {
      enableProgress && nprogress.done()
    }
  }, [enableProgress])

  return <Fragment />
}

export default Loading
