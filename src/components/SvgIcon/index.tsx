import { Icon } from '@iconify/react'

interface IProps {
  name: string
  className?: string
  prefix?: string
  size?: number
  onClick?: () => void
}

export default function SvgIcon(props: IProps) {
  const { name, className, prefix = 'icon', size = 14, onClick } = props
  return (
    name.includes(':')
      ? <Icon className={`overflow-hidden fill-[currentcolor] ${className}`} style={{ width: `${size}px`, height: `${size}px` }} icon={name} onClick={onClick} />
      : (
        <svg className={`overflow-hidden fill-[currentcolor] ${className}`} style={{ width: `${size}px`, height: `${size}px` }} aria-hidden="true" onClick={onClick}>
          <use xlinkHref={`#${prefix}-${name}`} />
        </svg>
        )
  )
}
