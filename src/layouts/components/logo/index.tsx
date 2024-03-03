import { useShallow } from 'zustand/react/shallow'
import { LogoWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  showLogoImage?: boolean
  showLogoText?: boolean
  className?: string
}

export default function Logo(props: IProps) {
  const { showLogoImage = true, showLogoText = true, className } = props
  const title = import.meta.env.VITE_APP_TITLE
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'

  const { logoTextColor } = useSysConfigStore(useShallow(state => ({
    logoTextColor: state.theme.logoTextColor,
  })))

  function customLogoClass() {
    return {
      logoTextColor,
      darkLogoTextColor: 'var(--xt-logo-text-color)',
    }
  }

  return (
    <LogoWrapper to="/" title={title} className={`h-[var(--xt-logo-height)] flex flex-shrink-0 items-center justify-center px-2 ${className}`} $customLogoClass={customLogoClass()}>
      { showLogoImage && <Avatar src={<img src={url} />} /> }
      { showLogoText && <span className="truncate font-bold">{title}</span> }

    </LogoWrapper>
  )
}
