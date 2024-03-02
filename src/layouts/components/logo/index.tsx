import { Link } from 'react-router-dom'

interface IProps {
  showLogoImage?: boolean
  showLogoText?: boolean
  className?: string
}

export default function Logo(props: IProps) {
  const { showLogoImage = true, showLogoText = true, className } = props
  const title = import.meta.env.VITE_APP_TITLE
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'

  return (
    <Link to="/" title={title} className={`logo h-[var(--xt-logo-height)] flex flex-shrink-0 items-center justify-center px-2 ${className}`}>
      { showLogoImage && <Avatar src={<img src={url} />} /> }
      { showLogoText && <span className="truncate font-bold">{title}</span> }

    </Link>
  )
}
