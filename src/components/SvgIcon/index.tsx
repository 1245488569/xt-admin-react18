import { Icon } from '@iconify/react'

interface IProps {
  name: string
  className?: string
  prefix?: string
  size?: number
}

export default function SvgIcon(props: IProps) {
  const { name, className, prefix = 'icon', size = 14 } = props
  return (
    name.includes(':')
      ? <Icon className={`overflow-hidden fill-[currentcolor] ${className}`} style={{ width: `${size}px`, height: `${size}px` }} icon={name} />
      : (
        <svg className={`overflow-hidden fill-[currentcolor] ${className}`} style={{ width: `${size}px`, height: `${size}px` }} aria-hidden="true">
          <use xlinkHref={`#${prefix}-${name}`} />
        </svg>
        )
  )
}
