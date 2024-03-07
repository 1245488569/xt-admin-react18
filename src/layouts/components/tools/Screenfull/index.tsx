import { useFullscreen } from 'ahooks'

interface IProps {
  className?: string
}

export default function Screenfull(props: IProps) {
  const { className } = props

  const body = document.body
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(body)

  return (
    <div className={`${className}`} onClick={toggleFullscreen}>
      <SvgIcon name={isFullscreen ? 'ri:fullscreen-exit-fill' : 'ri:fullscreen-fill'} size={20} className="cursor-pointer" />
    </div>
  )
}
