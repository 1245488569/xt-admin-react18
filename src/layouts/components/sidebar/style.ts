import styled from 'styled-components'

interface ISubSidebarWrapper {
  $customSubSidebarClass: {
    menuContainerBgColor: string
    menuTextColor: string
    menuHoverBgColor: string
    menuHoverTextColor: string
    menuActiveBgColor: string
    menuActiveTextColor: string
    darkMenuContainerBgColor: string
    darkMenuTextColor: string
    darkMenuHoverBgColor: string
    darkMenuHoverTextColor: string
    darkMenuActiveBgColor: string
    darkMenuActiveTextColor: string
  }
}

export const SubSidebarWrapper = styled.div<ISubSidebarWrapper>`
  background: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuContainerBgColor : props.$customSubSidebarClass.menuContainerBgColor};
`
