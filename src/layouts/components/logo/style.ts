import styled from 'styled-components'

interface ILogoWrapper {
  $customLogoClass: {
    logoTextColor: string
    darkLogoTextColor: string
  }
}

export const LogoWrapper = styled(Link)<ILogoWrapper>`
  width: inherit;
  color: ${props => props.theme.isDark ? props.$customLogoClass.darkLogoTextColor : props.$customLogoClass.logoTextColor};
  background: transparent;

  &:hover {
    color: ${props => props.theme.isDark ? props.$customLogoClass.darkLogoTextColor : props.$customLogoClass.logoTextColor};
  }
`
